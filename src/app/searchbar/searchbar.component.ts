import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  constructor(private api: ApiService, private router: Router, private cookieService: CookieService) {}


  ngOnInit(): void {
  }

  movieName: string;
  movies: Array<Object> = [];

  onUpdateSearchMovie(event: Event) {
    this.movieName = (<HTMLInputElement>event.target).value;
  }

  getMovies() {
    this.api.getMovies(this.movieName).subscribe((data) => {
      this.movies = data['Search'];
    });
  }

  getFavourites() {
    this.router.navigateByUrl('favoritespage');
  }

  signOut() {
    this.cookieService.delete('movieID');
    this.cookieService.delete('email');
    this.router.navigateByUrl('login');
  }

}
