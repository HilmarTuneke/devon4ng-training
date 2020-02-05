import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MovieDetailComponent, MovieOverviewComponent],
  exports: [MovieOverviewComponent]
})
export class MoviesModule { }
