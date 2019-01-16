import { Injectable } from "@angular/core";
import { Effect, ofType } from "@ngrx/effects";
import * as movieActions from './movies.actions'
import { Actions } from "@ngrx/effects";
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { ApiService } from "../services/api-service";
import { MovieStateModel } from './movies-state.model';
import { of } from "rxjs";

@Injectable()
export class MovieEffects {
    first: boolean = true;

    constructor(
        private actions$: Actions,
        private apiService: ApiService
    ) {
        console.log("Movie Effects - ctor")
    }

    @Effect()
    loadMovies$ = this.actions$.pipe(
        ofType(movieActions.MovieActionTypes.Load),
        tap(x => console.log(x)),
        mergeMap((action: movieActions.Load) => this.apiService.getInitMovies().pipe(
            map((movies: Array<MovieStateModel>) => (new movieActions.LoadSuccess(movies))),
            catchError(error => of(new movieActions.LoadFail(error)))
        ))
    )

} 