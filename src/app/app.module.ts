import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'; // Angular CLI environemnt

// NgRx
import { StoreModule } from "@ngrx/store"

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { CoversComponent } from './covers/covers.component';
import { moviesReducer } from './state/movies.reducer';
import { ErrorService } from './services/error-handler.service';
import { ApiService } from './services/api-service';

const appRoutes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'covers', component: CoversComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    CoversComponent
  ],
  imports: [
    StoreModule.forRoot({ 'movies': moviesReducer }),
    // StoreModule.forRoot({ 'movies': moviesReducer }),
    // Instrumentation must be imported after importing StoreModule (config is optional)
    StoreDevtoolsModule.instrument({
      name: "NgRx - Angular Redux Demo",
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    FormsModule,
    HttpClientModule,
    HttpModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ErrorService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
