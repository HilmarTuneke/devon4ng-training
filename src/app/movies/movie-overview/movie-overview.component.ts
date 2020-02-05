import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';
import {CompletionObserver, Observable} from 'rxjs';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss']
})
export class MovieOverviewComponent implements OnInit {

  movies$: Observable<Movie[]>;

  selectedMovie: Movie|null = null;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.reloadMovies();
  }

  reloadMovies() {
    this.movies$ = this.movieService.findAll();
  }

  selectMovie(movie: Movie): void {
    this.selectedMovie = movie;
  }

  onMovieUpdated(movieToSave: Movie): void {
    this.movieService.save(movieToSave).subscribe({
      next: savedMovie => this.selectedMovie = savedMovie,
      complete: () => this.reloadMovies()
    });
  }

  isMovieSelected(movie: Movie) {
    return this.selectedMovie && movie.id === this.selectedMovie.id;
  }

  create() {
    this.selectedMovie = {description: '', directors: '', title: '', year: 0};
  }
}
