import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MovieDetailComponent],
  exports: [MovieDetailComponent]
})
export class MoviesModule { }
