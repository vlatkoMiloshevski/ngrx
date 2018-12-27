import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Movie } from '../models/movie';
import { Store } from '@ngrx/store';
import { ErrorService } from '../services/error-handler.service';
import { Covers } from '../models/covers';

@Component({
  selector: 'app-covers',
  templateUrl: './covers.component.html',
  styleUrls: ['./covers.component.css']
})
export class CoversComponent implements OnInit, OnChanges {

  covers: Array<Covers> = [];

  constructor(
    private store: Store<any>,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.store.select('movies').subscribe(
      this.drawCheckedMoviesCovers.bind(this),
      this.errorService.errorHandler.bind(this)
    )
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  drawCheckedMoviesCovers(movies: Array<Movie>) {
    if (movies) {
      movies.forEach(movie => movie.checked ? this.covers.push({ name: movie.name, coverUrl: movie.coverUrl }) : null);
    }
  }

}
