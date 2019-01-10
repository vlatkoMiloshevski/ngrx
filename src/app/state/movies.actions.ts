import { Action } from "@ngrx/store";
import { Movie } from '../models/movie';

export enum MovieActionTypes {
    HandleCheckedMovies = '[MOVIE] HANDLE_CHECKED_MOVIES'
}

export class HandleCheckedMovies implements Action {
    readonly type = MovieActionTypes.HandleCheckedMovies;

    constructor(public payload: Array<Movie>) {}
}

export type MovieActions = HandleCheckedMovies;