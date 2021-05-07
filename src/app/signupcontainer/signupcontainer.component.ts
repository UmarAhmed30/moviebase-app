import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signupcontainer',
  templateUrl: './signupcontainer.component.html',
  styleUrls: ['./signupcontainer.component.css']
})

export class SignupcontainerComponent implements OnInit {


  constructor(private api: ApiService, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  email: string;
  username: string;
  password: string;
  valResult: string;

  onUpdateEmailID(event: Event) {
    this.email = (<HTMLInputElement>event.target).value;
  }

  onUpdateUsername(event: Event) {
    this.username = (<HTMLInputElement>event.target).value;
  }

  onUpdatePassword(event: Event) {
    this.password = (<HTMLInputElement>event.target).value;
  }

  addUser() {

    if(this.email != undefined){
      var atposition=this.email.indexOf("@");  
      var dotposition=this.email.lastIndexOf(".");  
    }

    if (this.email == undefined) {
      this.valResult = "Email field cannot be empty!";
    } else if (this.username == undefined) {
      this.valResult = "Username field cannot be empty!";
    } else if (this.password == undefined) {
      this.valResult = "Password field cannot be empty!";
    } else if(atposition<1 || dotposition<atposition+2 || dotposition+2>=this.email.length) {
      this.valResult = "Invalid email!";
    } else {
      this.api.addUser(this.email, this.username, this.password);
      this.cookieService.set('email', this.email);
      this.router.navigateByUrl('homepage');
    }
  }

  gotoSignIn() {
    this.router.navigateByUrl('login');
  }

}
