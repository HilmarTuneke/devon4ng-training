import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule, FormsModule, HttpClientModule, RouterModule
  ],
  declarations: [MovieDetailComponent, MovieOverviewComponent],
  exports: [MovieOverviewComponent]
})
export class MoviesModule { }
