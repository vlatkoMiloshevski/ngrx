import { CoverState } from "./covers-state.model";

export function coversReducer(state, action): CoverState {
    switch (action.type) {
        case "TOGGLE_IMAGE_SIZE":
            return {
                ...state,
                showLargeImages: action.payload
            };
        default:
            return state;
    }
}
