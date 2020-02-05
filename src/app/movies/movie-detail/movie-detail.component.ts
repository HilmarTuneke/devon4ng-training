import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Movie} from '../movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input()
  headerLevel: 2 | 3;

  @Output()
  movieUpdate: EventEmitter<Movie> = new EventEmitter<Movie>();

  private myMovie: Movie;

  constructor() {
  }

  ngOnInit() {
  }

  get movie() {
    return this.myMovie;
  }

  @Input()
  set movie(movie: Movie) {
    this.myMovie = {...movie};
  }

  apply(): void {
    this.movieUpdate.emit(this.myMovie);
  }
}
