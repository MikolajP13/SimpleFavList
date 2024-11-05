import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FavoriteListComponent } from '../favorites/favorite-list/favorite-list.component';
import { FavoritesService } from '../favorites/favorite-service/favorites.service';
import { Favorite, FavoriteCategory } from '../favorites/favorite.model';
import { startWith, switchMap } from 'rxjs';

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [FavoriteListComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css',
})
export class MoviesComponent implements OnInit {
  private favoritesService = inject(FavoritesService);
  private destroyRef = inject(DestroyRef);

  category: FavoriteCategory = FavoriteCategory.Movie;
  favoriteMovies: Favorite[] = [];

  ngOnInit(): void {
    const subscription = this.favoritesService.refreshFavorites$
      .pipe(
        startWith({}),
        switchMap(() => this.favoritesService.getFavoriteMovies())
      )
      .subscribe({
        next: (favs) => (this.favoriteMovies = favs),
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
}
