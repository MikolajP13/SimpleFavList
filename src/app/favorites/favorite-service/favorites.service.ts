import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environment/environment.development';
import { HttpClient } from '@angular/common/http';
import { Favorite, FavoriteCategory } from '../favorite.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private apiUrl = environment.apiUrl;
  private httpClient = inject(HttpClient);

  constructor() {}

  getFavoriteMovies(): Observable<Favorite[]> {
    return this.httpClient
      .get<Favorite[]>(`${this.apiUrl}/favorites`)
      .pipe(
        map((favs) => favs.filter((f) => f.category === FavoriteCategory.Movie))
      );
  }

  getFavoriteBooks(): Observable<Favorite[]> {
    return this.httpClient
      .get<Favorite[]>(`${this.apiUrl}/favorites`)
      .pipe(
        map((favs) => favs.filter((f) => f.category === FavoriteCategory.Book))
      );
  }

  getNumberOfFavoriteMovies(): Observable<Number> {
    return this.httpClient
      .get<Favorite[]>(`${this.apiUrl}/favorites`)
      .pipe(
        map(favs => favs.filter(f => f.category === FavoriteCategory.Movie)),
        map((favs) => favs.length)
      );
  }

  getNumberOfFavoriteBooks(): Observable<Number> {
    return this.httpClient
      .get<Favorite[]>(`${this.apiUrl}/favorites`)
      .pipe(
        map(favs => favs.filter(f => f.category === FavoriteCategory.Book)),
        map((favs) => favs.length)
      );
  }
}
