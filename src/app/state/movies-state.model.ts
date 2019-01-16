import { Movie } from "../models/movie";

export interface MovieStateModel {
    movies: Array<Movie>;
}

export const initMovieStateModel: MovieStateModel = {
    movies: []
}