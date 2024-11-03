import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { FavoriteListComponent } from '../favorites/favorite-list/favorite-list.component';
import { Favorite, FavoriteCategory } from '../favorites/favorite.model';
import { FavoritesService } from '../favorites/favorite-service/favorites.service';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [FavoriteListComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css',
})
export class BooksComponent implements OnInit {
  private favoritesService = inject(FavoritesService);
  private destroyRef = inject(DestroyRef);

  category: FavoriteCategory = FavoriteCategory.Book;
  favoriteBooks: Favorite[] = [];

  ngOnInit(): void {
    const subsciption = this.favoritesService.getFavoriteBooks().subscribe({
      next: (favs) => (this.favoriteBooks = favs),
    });

    this.destroyRef.onDestroy(() => {
      subsciption.unsubscribe();
    })
  }
}
