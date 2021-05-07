import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  omdbURL: string = 'http://www.omdbapi.com/?apikey=3f36cd84';
  usersURL: string = 'http://localhost:3000/users';
  favoritesURL: string = 'http://localhost:3001/favorites';

  getUser(email: string) {
    var url = this.usersURL + '?email=' + email;
    return this.http.get(url);
  }

  addUser(email: string, username: string, password: string) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    var url = this.usersURL;

    this.http.post(url, {
      "email": email,
      "username": username,
      "password": password
    },
      {
        headers: headers
      }).subscribe((data) => { });
  }

  getMovies(movieName: string) {
    var url = this.omdbURL + '&s=' + movieName;
    return this.http.get(url);
  }

  getMovieDetails(movieID: String) {
    var url = this.omdbURL + '&i=' + movieID;
    return this.http.get(url);
  }

  addFavorites(email: string, movieID: string, movieTitle: string) {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');

    var url = this.favoritesURL;

    this.http.post(url, {
      "email": email,
      "movieID": movieID,
      "movieTitle": movieTitle
    },
      {
        headers: headers
      }).subscribe((data) => { });
  }

  getFavorites(email: string) {
    var url = this.favoritesURL + '?email=' + email;
    return this.http.get(url);
  }

}
