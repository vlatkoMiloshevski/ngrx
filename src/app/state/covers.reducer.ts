export function coversReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_IMAGE_SIZE":
            return {
                ...state,
                showLargeImages: action.payload
            };
        default:
            console.log("default");
            return state;
    }
}
