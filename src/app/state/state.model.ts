import { MovieState } from './movies.reducer';
import { CoverState } from './covers.reducer';

export interface State {
    movies: MovieState;
    covers: CoverState
}