import { Injectable } from '@angular/core';
import {Movie} from './movie';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Movie[] = [];

  constructor() {
    this.movies.push({
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

    this.movies.push({
      description: `Bla bla blubb 2`,
      director: 'Noch Jemand',
      id: 2,
      title: 'Sehr langweiliger Film',
      year: 1973
    });
  }

  findAll(): Observable<Movie[]> {
    return of(this.movies.map(x => Object.assign({}, x))).pipe(delay(2000));
  }

  save(movieToSave: Movie): Observable<Movie> {
    const outdated: Movie = this.movies.find(m => m.id === movieToSave.id);
    if (outdated) {
      Object.assign(outdated, movieToSave);
      return of(outdated).pipe(delay(2000));
    } else {
      this.movies.push(movieToSave);
      return of(movieToSave).pipe(delay(2000));
    }
  }

  findOne(id: number): Observable<Movie> {
    return of({...this.movies.find(m => m.id === id)}).pipe(delay(2000));
  }
}
