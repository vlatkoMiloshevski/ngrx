import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Movie } from '../models/movie';
import { Store, select } from '@ngrx/store';
import { ErrorService } from '../services/error-handler.service';
import { StateModel } from '../state/state.model';
import * as movieActions from '../state/movies.actions';
import { Observable } from 'rxjs';
import * as fromMovie from '../state/movies.selector';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnChanges {
  movies: Array<Movie> = [];

  constructor(
    private store: Store<StateModel>,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.store.pipe(select(fromMovie.getMovieListState)).subscribe(
      this.handleMoviesCheckedState.bind(this),
      this.errorService.errorHandler.bind(this)
    );
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  changeCheckedValue(movie: Movie) {
    this.store.dispatch(new movieActions.HandleCheckedMovies(this.movies));
  }

  // handle movies state
  handleMoviesCheckedState(movieList: Array<Movie>) {
    this.movies = movieList;
  }

}
