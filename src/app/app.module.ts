import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignincontainerComponent } from './signincontainer/signincontainer.component';
import { SignupcontainerComponent } from './signupcontainer/signupcontainer.component';
import { FooterComponent } from './footer/footer.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { MovieListContainerComponent } from './movie-list-container/movie-list-container.component';
import { MovieContainerComponent } from './movie-container/movie-container.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignincontainerComponent,
    SignupcontainerComponent,
    FooterComponent,
    SearchbarComponent,
    MovieListContainerComponent,
    MovieContainerComponent,
    FavouriteListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
