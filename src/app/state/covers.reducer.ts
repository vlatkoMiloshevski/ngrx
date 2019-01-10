import { CoverStateModel, initCoverStateModel } from './covers-state.model';
import { CoverAction, CoverActionTypes } from './covers.actions';

export function coversReducer(state: CoverStateModel = initCoverStateModel, action: CoverAction): CoverStateModel {
    switch (action.type) {
        case CoverActionTypes.HandleToggleLargeImages:
            return {
                ...state,
                showLargeImages: action.payload
            };
        default:
            return state;
    }
}
