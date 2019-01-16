import { MovieStateModel, initMovieStateModel } from "./movies-state.model";
import { MovieActions, MovieActionTypes } from './movies.actions';
import { Movie } from "../models/movie";

export function moviesReducer(state: MovieStateModel = initMovieStateModel, action: MovieActions): MovieStateModel {
    switch (action.type) {
        case MovieActionTypes.HandleCheckedMovies:
            return {
                ...state,
                movies: [...action.payload]
            }
        case MovieActionTypes.LoadSuccess:
            return {
                ...state,
                movies: action.payload
            }
        default:
            return state;
    }
}
