import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie';
import {MovieService} from '../movie.service';
import {CompletionObserver, Observable} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, map, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-movie-overview',
  templateUrl: './movie-overview.component.html',
  styleUrls: ['./movie-overview.component.scss']
})
export class MovieOverviewComponent implements OnInit {

  private isArray = (() => Array.isArray || (<T>(x: any): x is T[] => x && typeof x.length === 'number'))();

  movies$: Observable<Movie[]>;

  selectedMovie: Movie|null = null;

  constructor(private movieService: MovieService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.reloadMovies();
    /*
    this.activatedRoute.params.subscribe(params => { if (params.id) {
      if (this.isNumeric(params.id)) {
        this.movieService.findOne(+params.id).subscribe(movie => this.selectedMovie = movie);
      } else {
        this.create();
      }
    } });
    */
    const idFromUrl$: Observable<any> = this.activatedRoute.params.pipe(filter(params => params.id), map(params => params.id));
    idFromUrl$.pipe(filter(id => this.isNumeric(id))).pipe(switchMap(id => this.movieService.findOne(id)))
      .subscribe(movie => this.selectedMovie = movie);
    idFromUrl$.pipe(filter(id => !this.isNumeric(id))).subscribe(id => this.create());
  }


  reloadMovies() {
    this.movies$ = this.movieService.findAll();
  }

  onMovieUpdated(movieToSave: Movie): void {
    this.movieService.save(movieToSave).subscribe({
      next: savedMovie => this.router.navigate(['/movies', savedMovie.id]),
      complete: () => this.reloadMovies()
    });
  }

  isMovieSelected(movie: Movie) {
    return this.selectedMovie && this.selectedMovie.id  === movie.id;
  }

  create() {
    this.selectedMovie = {description: '', directors: '', title: '', year: null};
  }

  private isNumeric(val: any): val is number | string {
    // parseFloat NaNs numeric-cast false positives (null|true|false|"")
    // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
    // subtraction forces infinities to NaN
    // adding 1 corrects loss of precision from parseFloat (#15100)
    return !this.isArray(val) && (val - parseFloat(val) + 1) >= 0;
  }
}
