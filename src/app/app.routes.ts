import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { BooksComponent } from './books/books.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'fav-movies',
    component: MoviesComponent,
  },
  {
    path: 'fav-books',
    component: BooksComponent,
  },
  {
    path: '**',
    redirectTo: ''
  },
];
