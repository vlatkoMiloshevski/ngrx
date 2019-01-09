import { MovieStateModel } from "./movies-state.model";
import { CoverState } from "./covers-state.model";

export interface StateModel {
    movies: MovieStateModel;
    covers: CoverState
}