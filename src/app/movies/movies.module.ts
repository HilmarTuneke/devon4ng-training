import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MovieOverviewComponent } from './movie-overview/movie-overview.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule
  ],
  declarations: [MovieDetailComponent, MovieOverviewComponent],
  exports: [MovieOverviewComponent]
})
export class MoviesModule { }
