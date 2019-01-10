import { Action } from "@ngrx/store";
import { Movie } from '../models/movie';

export enum MovieActionTypes {
    HandleCheckedMovies = '[MOVIE] HANDLE_CHECKED_MOVIES',
    AddNewMovie = '[MOVIE] ADD_NEW_MOVIE'
}

export class HandleCheckedMovies implements Action {
    readonly type = MovieActionTypes.HandleCheckedMovies;

    constructor(public payload: Array<Movie>) { }
}

export class AddNewMovie implements Action {
    readonly type = MovieActionTypes.AddNewMovie;

    constructor() { }
}

export type MovieActions = HandleCheckedMovies | AddNewMovie;