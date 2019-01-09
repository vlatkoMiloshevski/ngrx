import { MovieStateModel, initMovieStateModel } from "./movies-state.model";
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MovieActions, MovieActionTypes } from './movies.actions';

export function moviesReducer(state: MovieStateModel = initMovieStateModel, action: MovieActions): MovieStateModel {
    switch (action.type) {
        case MovieActionTypes.HandleCheckedMovies:
            return handleMovieCheckedState(state, action);
        default:
            return state;
    }
}

function handleMovieCheckedState(state, action) {
    let movies = state == undefined ? [] : state.movies;
    if (movies.find(movie => movie.id == action.payload.id)) {
        movies.splice(movies.map(x => x.id).indexOf(action.payload.id), 1);
    }
    else {
        action.payload.checked = !action.payload.checked;
        movies.push(action.payload);
    }
    return {
        ...state,
        movies
    }
}

const getMovieFeatureState = createFeatureSelector<MovieStateModel>('movies');

export const getMovieListState = createSelector(
    getMovieFeatureState,
    state => state.movies
)
