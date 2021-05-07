import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { MovieContainerComponent } from './movie-container/movie-container.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { SignincontainerComponent } from './signincontainer/signincontainer.component';
import { SignupcontainerComponent } from './signupcontainer/signupcontainer.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login', component: SignincontainerComponent},
  {path:'register', component: SignupcontainerComponent},
  {path: 'homepage', component: SearchbarComponent},
  {path: 'moviepage', component: MovieContainerComponent},
  {path: 'favoritespage', component: FavouriteListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }