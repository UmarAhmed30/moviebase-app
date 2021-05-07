import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {

  favorites;

  constructor(private api:ApiService, private cookieService: CookieService) {
    this.api.getFavorites(this.cookieService.get('email')).subscribe((data)=>{
      this.favorites=data;
    });
   }

  ngOnInit(): void {
  }

}
