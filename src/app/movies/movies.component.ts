import { Component, OnInit, Input, SimpleChanges, OnChanges, EventEmitter, Output } from '@angular/core';
import { Movie } from '../models/movie';
import { Store } from '@ngrx/store';
import { ErrorService } from '../services/error-handler.service';
import { ApiService } from '../services/api-service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnChanges {
  movies: Array<Movie> = [];
  showCheckedMovies: boolean;

  constructor(
    private store: Store<any>,
    private apiService: ApiService,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.apiService.getInitMovies().subscribe(
      this.handleLoadingMovies.bind(this),
      this.errorService.errorHandler.bind(this)
    )

    this.store.select('movies').subscribe(
      this.handleMoviesCheckedState.bind(this),
      this.errorService.errorHandler.bind(this)
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  changeCheckedValue(movie: Movie) {
    this.store.dispatch({
      type: "HANDLE_CHECKED_MOVIES",
      payload: movie
    })
  }

  // handle movies state
  handleMoviesCheckedState(stateMovies) {
    if (stateMovies) {
      this.movies.forEach(movie => stateMovies.find(stateMovie => stateMovie.id == movie.id) ? movie.checked = true : null)
    }
    this.showCheckedMovies = this.movies.filter(movie => movie.checked).length ? true : false;
  }

  //loading movies helper
  handleLoadingMovies(movie: Movie) {
    this.movies.push(movie);
  }

}
