import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MoviesModule} from './movies/movies.module';
import {RouterModule, Routes} from '@angular/router';
import {RegisterComponent} from './login/register/register.component';
import {MovieOverviewComponent} from './movies/movie-overview/movie-overview.component';
import {PageNotFoundComponent} from './static-pages/page-not-found/page-not-found.component';
import {AboutComponent} from './static-pages/about/about.component';
import {LoginModule} from './login/login.module';
import {StaticPagesModule} from './static-pages/static-pages.module';

const appRoutes: Routes = [
  {path: '', redirectTo: '/register', pathMatch: 'full'},
  {path: 'register', component: RegisterComponent},
  {path: 'movies', component: MovieOverviewComponent},
  {path: 'movies/:id', component: MovieOverviewComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [BrowserModule, MoviesModule, LoginModule, StaticPagesModule, RouterModule.forRoot(appRoutes)],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
