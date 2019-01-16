import { Action } from "@ngrx/store";
import { Movie } from '../models/movie';

export enum MovieActionTypes {
    HandleCheckedMovies = '[MOVIE] HANDLE_CHECKED_MOVIES',
    AddNewMovie = '[MOVIE] ADD_NEW_MOVIE',
    LoadSuccess = "[MOVIE] LOAD_SUCCESS",
    Load = "[MOVIE] LOAD",
    LoadFail = "[MOVIE] LOAD_FAIL"
}

export class HandleCheckedMovies implements Action {
    readonly type = MovieActionTypes.HandleCheckedMovies;

    constructor(public payload: Array<Movie>) { }
}

export class AddNewMovie implements Action {
    readonly type = MovieActionTypes.AddNewMovie;

    constructor() { }
}

export class Load implements Action {
    readonly type = MovieActionTypes.Load;
}

export class LoadSuccess implements Action {
    readonly type = MovieActionTypes.LoadSuccess;

    constructor(public payload: any ) { } 
}

export class LoadFail implements Action {
    readonly type = MovieActionTypes.LoadFail;

    constructor(public payload: any ) { } 
}

export type MovieActions = HandleCheckedMovies | AddNewMovie | LoadSuccess | LoadFail | Load;