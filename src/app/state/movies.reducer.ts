import { MovieStateModel, initMovieStateModel } from "./movies-state.model";
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieActions, MovieActionTypes } from './movies.actions';

export function moviesReducer(state: MovieStateModel = initMovieStateModel, action: MovieActions): MovieStateModel {
    switch (action.type) {
        case MovieActionTypes.HandleCheckedMovies:
            return {
                ...state,
                movies: [...action.payload]
            }
        default:
            return state;
    }
}

const getMovieFeatureState = createFeatureSelector<MovieStateModel>('movies');

export const getMovieListState = createSelector(
    getMovieFeatureState,
    state => state.movies
)
