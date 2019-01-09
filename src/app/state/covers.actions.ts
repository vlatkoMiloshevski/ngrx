import { Action } from "@ngrx/store";

export enum CoverActionTypes {
    HandleToggleLargeImages = '[COVER] TOGGLE_IMAGE_SIZE'
}

export class HandleToggleLargeImages implements Action {
    readonly type = CoverActionTypes.HandleToggleLargeImages;

    constructor(public payload: boolean) { }
}

export type CoverAction = HandleToggleLargeImages