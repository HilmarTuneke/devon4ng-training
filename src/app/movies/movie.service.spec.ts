import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });

  it('should return Observable', () => {
    const service: MovieService = TestBed.get(MovieService);
    const movies$ = service.findAll();
    expect(movies$).toBeTruthy();
  });

  it('should return movies', (done: DoneFn) => {
    const service: MovieService = TestBed.get(MovieService);
    const movies$ = service.findAll();
    movies$.subscribe(movies => {
      expect(movies.length).toBeGreaterThan(0);
      done();
    });
  });

  it('should save a movie', (done: DoneFn) => {
      // TODO
      done();
    });

});
