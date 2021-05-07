import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signincontainer',
  templateUrl: './signincontainer.component.html',
  styleUrls: ['./signincontainer.component.css']
})
export class SignincontainerComponent implements OnInit {

  constructor(private api: ApiService, private cookieService: CookieService, private router: Router) { }

  ngOnInit(): void {
  }

  email: string
  password: string
  response: Object
  valResult: string

  onUpdateEmail(event: Event) {
    this.email = (<HTMLInputElement>event.target).value;
  }

  onUpdatePassword(event: Event) {
    this.password = (<HTMLInputElement>event.target).value;
  }

  auth() {

    if (this.email != undefined) {
      var atposition = this.email.indexOf("@");
      var dotposition = this.email.lastIndexOf(".");
    }

    if (this.email == undefined) {
      this.valResult = "Email field cannot be empty!";
    } else if (this.password == undefined) {
      this.valResult = "Password field cannot be empty!";
    } else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= this.email.length) {
      this.valResult = "Invalid email!";
    } else {
      this.api.getUser(this.email).subscribe((data) => { 
        this.response = data; 

        if (Object.keys(this.response).length == 0) {
          this.valResult = "Create an account first!";
        }
  
        if (this.response[0].password == this.password) {
          this.cookieService.set('email', this.email);
          this.router.navigateByUrl('homepage');
        }
        else {
          this.valResult = "Incorrect Password!";
        }
      });

    }
  }

  gotoSignUp() {
    this.router.navigateByUrl('register');
  }

  
}
