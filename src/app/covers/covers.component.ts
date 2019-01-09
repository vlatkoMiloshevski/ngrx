import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Movie } from '../models/movie';
import { Store } from '@ngrx/store';
import { ErrorService } from '../services/error-handler.service';
import { Covers } from '../models/covers';
import { CoverState } from '../state/covers.reducer';
import { MovieState, moviesReducer } from '../state/movies.reducer';

@Component({
  selector: 'app-covers',
  templateUrl: './covers.component.html',
  styleUrls: ['./covers.component.css']
})
export class CoversComponent implements OnInit, OnChanges {

  covers: Array<Covers> = [];
  checked: boolean;
  imageWidth: string;

  constructor(
    private store: Store<MovieState>,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.store.select('movies').subscribe(
      this.drawCheckedMoviesCovers.bind(this),
      this.errorService.errorHandler.bind(this)
    )
    this.store.select('covers').subscribe(
      this.handleImagesSize.bind(this),
      this.errorService.errorHandler.bind(this)
    )
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  onCheckboxModelChange(changeImageSize) {
    this.store.dispatch({
      type: "TOGGLE_IMAGE_SIZE",
      payload: changeImageSize
    })
  }

  drawCheckedMoviesCovers(state: MovieState) {
    if (state && state.movies) {
      state.movies.forEach(movie => movie.checked ? this.covers.push({ name: movie.name, coverUrl: movie.coverUrl }) : null);
    }
  }

  handleImagesSize(covers) {
    this.imageWidth = "180";
    this.checked = false;

    if (covers) {
      this.imageWidth = covers.showLargeImages ? "230" : "180";
      this.checked = covers.showLargeImages ? true : false;
    }
  }

}
