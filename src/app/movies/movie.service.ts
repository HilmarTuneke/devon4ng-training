import {Injectable} from '@angular/core';
import {Movie} from './movie';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  moviesUrl = '/services/rest/movies';

  constructor(private httpClient: HttpClient) {
  }

  findAll(): Observable<Movie[]> {
    return this.httpClient.get<Movie[]>(this.moviesUrl);
  }

  save(movieToSave: Movie): Observable<Movie> {
    movieToSave.id = this.numberfy(movieToSave.id);
    movieToSave.year = this.numberfy(movieToSave.year);
    return this.httpClient.post<Movie>(this.moviesUrl, movieToSave);
  }

  private numberfy(value: any): number {
    if (value && typeof value !== 'number') {
      return +value;
    } else {
      return value;
    }
  }

  findOne(id: number): Observable<Movie> {
    return this.httpClient.get<Movie>(this.moviesUrl + '/' + id);
  }
}
