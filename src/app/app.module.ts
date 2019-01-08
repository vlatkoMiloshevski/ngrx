import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { environment } from '../environments/environment'; // Angular CLI environemnt

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

// NgRx
import { StoreModule } from "@ngrx/store"

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { CoversComponent } from './covers/covers.component';
import { ErrorService } from './services/error-handler.service';
import { ApiService } from './services/api-service';
import { MoviesModule } from './movies/movies.module';
import { CoversModule } from './covers/covers.module';
import { MaterialModule } from './shared/material.module';

const appRoutes: Routes = [
  { path: 'movies', component: MoviesComponent },
  { path: 'covers', component: CoversComponent }
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MaterialModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      name: "NgRx - Angular Redux Demo",
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    FormsModule,
    HttpClientModule,
    HttpModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MoviesModule,
    CoversModule
  ],
  providers: [
    ErrorService,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
