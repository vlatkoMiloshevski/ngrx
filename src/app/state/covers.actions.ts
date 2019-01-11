import { Action } from "@ngrx/store";
import { Cover } from "../models/cover";

export enum CoverActionTypes {
    HandleToggleLargeImages = '[COVER] TOGGLE_IMAGE_SIZE',
    LoadSuccess = "[COVER] LOAD_SUCCESS",
    Load = "[COVER] LOAD",
    LoadFail = "[COVER] LOAD_FAIL"
}

export class HandleToggleLargeImages implements Action {
    readonly type = CoverActionTypes.HandleToggleLargeImages;

    constructor(public payload: boolean) { }
}

export class Load implements Action {
    readonly type = CoverActionTypes.Load;
}

export class LoadSuccess implements Action {
    readonly type = CoverActionTypes.LoadSuccess;

    constructor(public payload: any ) { } 
}

export class LoadFail implements Action {
    readonly type = CoverActionTypes.LoadFail;

    constructor(public payload: any ) { } 
}


export type CoverAction = HandleToggleLargeImages | LoadSuccess | LoadFail | Load