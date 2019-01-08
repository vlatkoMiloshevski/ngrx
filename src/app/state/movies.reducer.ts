export function moviesReducer(state, action) {
    switch (action.type) {
        case "HANDLE_CHECKED_MOVIES":
            return handleMovieCheckedState(state, action);
        default:
            return state;
    }
}

function handleMovieCheckedState(state, action){
    let movies = state == undefined ? [] : [...state];
    if (movies.find(movie => movie.id == action.payload.id)) {
        movies.splice(movies.indexOf(action.payload));
    }
    else {
        action.payload.checked = !action.payload.checked;
        movies.push(action.payload);
    }
    return movies;
}
