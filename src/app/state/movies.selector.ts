import { createFeatureSelector, createSelector } from "@ngrx/store";
import { MovieStateModel } from "./movies-state.model";

const getMovieFeatureState = createFeatureSelector<MovieStateModel>('movies');

export const getMovieListState = createSelector(
    getMovieFeatureState,
    state => state.movies
)
