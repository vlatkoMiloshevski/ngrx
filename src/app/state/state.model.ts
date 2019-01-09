import { MovieStateModel } from "./movies-state.model";
import { CoverStateModel } from "./covers-state.model";

export interface StateModel {
    movies: MovieStateModel;
    covers: CoverStateModel
}