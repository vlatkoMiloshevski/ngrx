import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ErrorService } from '../services/error-handler.service';
import { Covers } from '../models/covers';
import { StateModel } from '../state/state.model';
import { Movie } from '../models/movie';
import * as coverActions from '../state/covers.actions';
import { getMovieListState } from '../state/movies.selector';
import { getShowLargeImages } from '../state/covers.selector';

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
