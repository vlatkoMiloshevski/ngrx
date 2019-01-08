export function coversReducer(state, action): CoverState {
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

export interface CoverState {
    showLargeImages: boolean
}