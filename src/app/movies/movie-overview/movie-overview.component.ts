import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss']
})
export class MovieOverviewComponent implements OnInit {

  moviews: Movie[] = [];

  selectedMovie: Movie|null;

  constructor() { }

  ngOnInit() {
    this.moviews.push({
      description: `Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.`,
      director: 'Keine Ahnung',
      id: 1,
      title: 'Sehr toller Film',
      year: 2015
    });

    this.moviews.push({
      description: `Bla bla blubb 2`,
      director: 'Noch Jemand',
      id: 2,
      title: 'Sehr langweiliger Film',
      year: 1973
    });
  }

  selectMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }

  onMovieUpdated(updatedOrNewMovie: Movie): void {
    const outdated: Movie = this.moviews.find(m => m.id === updatedOrNewMovie.id);
    if (outdated) {
      Object.assign(outdated, updatedOrNewMovie);
    } else {
      this.moviews.push(updatedOrNewMovie);
    }
  }
}
