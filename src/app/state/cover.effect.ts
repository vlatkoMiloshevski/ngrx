import { Injectable } from "@angular/core";
import { Effect, ofType } from "@ngrx/effects";
import * as coverActions from './covers.actions'
import { Actions } from "@ngrx/effects";
import { mergeMap, map, catchError } from 'rxjs/operators';
import { ApiService } from "../services/api-service";

@Injectable()
export class CoverEffects {
    constructor(
        private actions$: Actions,
        private apiService: ApiService
    ) {
        console.log("Cover Effects - ctor")
    }

    @Effect()
    loadCovers$ = this.actions$.pipe(
        ofType(coverActions.CoverActionTypes.Load),
        mergeMap((action: coverActions.Load) => this.apiService.getNewCover().pipe(
            map((cover: any) => (new coverActions.LoadSuccess(cover))),
            catchError(coverActions.LoadFail.bind(this))
        ))
    )

} 