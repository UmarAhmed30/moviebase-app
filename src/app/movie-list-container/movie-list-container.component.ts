import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-movie-list-container',
  templateUrl: './movie-list-container.component.html',
  styleUrls: ['./movie-list-container.component.css']
})
export class MovieListContainerComponent implements OnInit {

  @Input()
  movies: Array<Object> = [];

  constructor(private cookieService:CookieService, private router: Router) {}

  ngOnInit(): void {
  }

  getMovieID(movieID: string) {
    this.cookieService.set('movieID', movieID);
    this.router.navigateByUrl('moviepage');
  }

}
