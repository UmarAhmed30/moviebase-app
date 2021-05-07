import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.css']
})
export class MovieContainerComponent implements OnInit {

  movieDetails: Object;

  constructor(private cookieService:CookieService, private api: ApiService, private router: Router) { 
    this.api.getMovieDetails(this.cookieService.get('movieID')).subscribe((data) => {
      this.movieDetails = data;
    });
  }

  ngOnInit(): void {
  }

  addFavorites() {
    this.api.addFavorites(this.cookieService.get('email'),this.movieDetails['imdbID'], this.movieDetails['Title']);
  }

}
