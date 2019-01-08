import { Movie } from "../models/movie";

export function moviesReducer(state, action): MovieState {
    switch (action.type) {
        case "HANDLE_CHECKED_MOVIES":
            return handleMovieCheckedState(state, action);
        default:
            return state;
    }
}

function handleMovieCheckedState(state, action) {
    let movies = state == undefined ? [] : state.movies;
    if (movies.find(movie => movie.id == action.payload.id)) {
        movies.splice(movies.map(x => x.id).indexOf(action.payload.id), 1);
    }
    else {
        action.payload.checked = !action.payload.checked;
        movies.push(action.payload);
    }
    console.log(movies)
    return {
        ...state,
        movies
    }
}

export interface MovieState {
    movies: Array<Movie>;
}