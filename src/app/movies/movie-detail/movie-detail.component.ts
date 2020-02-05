import {Component, Input, OnInit} from '@angular/core';
import {Movie} from '../movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  @Input()
  movie: Movie;

  @Input()
  headerLevel: 2 | 3;

  constructor() {
  }

  ngOnInit() {
  }
}
