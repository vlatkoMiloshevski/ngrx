import { MovieStateModel } from "./movies-state.model";

export function moviesReducer(state, action): MovieStateModel {
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
    return {
        ...state,
        movies
    }
}
