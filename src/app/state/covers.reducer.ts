import { CoverStateModel, initCoverStateModel } from './covers-state.model';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export function coversReducer(state: CoverStateModel = initCoverStateModel, action): CoverStateModel {
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

const getCoverFeatureState = createFeatureSelector<CoverStateModel>('covers');

export const getShowLargeImages = createSelector(
    getCoverFeatureState,
    state => state.showLargeImages
)
