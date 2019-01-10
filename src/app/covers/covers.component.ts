import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ErrorService } from '../services/error-handler.service';
import { Covers } from '../models/covers';
import { MovieStateModel } from '../state/movies-state.model';
import { CoverStateModel } from '../state/covers-state.model';
import { StateModel } from '../state/state.model';
import { getMovieListState } from '../state/movies.reducer';
import { Movie } from '../models/movie';
import { getShowLargeImages } from '../state/covers.reducer';
import * as coverActions from '../state/covers.actions';

@Component({
  selector: 'app-covers',
  templateUrl: './covers.component.html',
  styleUrls: ['./covers.component.css']
})
export class CoversComponent implements OnInit, OnChanges {

  covers: Array<Covers> = [];
  checked: boolean;
  imageWidth: string;

  constructor(
    private store: Store<StateModel>,
    private errorService: ErrorService
  ) { }

  ngOnInit() {
    this.store.pipe(select(getMovieListState)).subscribe(
      this.drawCheckedMoviesCovers.bind(this),
      this.errorService.errorHandler.bind(this)
    )
    this.store.pipe(select(getShowLargeImages)).subscribe(
      this.handleImagesSize.bind(this),
      this.errorService.errorHandler.bind(this)
    )
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  onCheckboxModelChange(changeImageSize) {
    this.store.dispatch(new coverActions.HandleToggleLargeImages(changeImageSize))
  }

  drawCheckedMoviesCovers(movieList: Array<Movie>) {
    this.covers = movieList.filter(movie => movie.checked);
  }

  handleImagesSize(showLargeImages: boolean) {
    this.imageWidth = "150";
    this.checked = false;

    if (showLargeImages != undefined) {
      this.imageWidth = showLargeImages ? "200" : "150";
      this.checked = showLargeImages ? true : false;
    }
  }

}
