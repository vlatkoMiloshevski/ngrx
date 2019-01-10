import { Component, OnInit, Input, SimpleChanges, OnChanges } from '@angular/core';
import { Movie } from '../models/movie';
import { Store, select } from '@ngrx/store';
import { ErrorService } from '../services/error-handler.service';
import { ApiService } from '../services/api-service';
import { StateModel } from '../state/state.model';
import * as movieActions from '../state/movies.actions';
import { getMovieListState } from '../state/movies.selector';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, OnChanges {
  movies: Array<Movie> = [];

  constructor(
    private store: Store<StateModel>,
    private apiService: ApiService,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.store.pipe(select(getMovieListState)).subscribe(
      this.handleMoviesCheckedState.bind(this),
      this.errorService.errorHandler.bind(this)
    )
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  changeCheckedValue(movie: Movie) {
    this.store.dispatch(new movieActions.HandleCheckedMovies(this.movies));
  }

  // handle movies state
  handleMoviesCheckedState(movieList: Array<Movie>) {
    this.movies = movieList;
    // if (movieList && movieList.length) {
    //   this.movies.forEach(movie => movieList.find(stateMovie => stateMovie.id == movie.id) ? movie.checked = true : null)
    // }
  }

  loadMovies() {
    this.apiService.getInitMovies().subscribe(
      this.handleLoadingMovies.bind(this),
      this.errorService.errorHandler.bind(this)
    )
  }

  addNewMovie(){
    this.store.dispatch(new movieActions.AddNewMovie());
  }

  //loading movies helper
  handleLoadingMovies(movie: Movie) {
    this.movies.push(movie);
  }

}
 