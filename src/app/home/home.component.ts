import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { FavoritesService } from '../favorites/favorite-service/favorites.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  private favoritesService = inject(FavoritesService);
  private destroyRef = inject(DestroyRef);

  numberOfFavoritesMovies!: number;
  numberOfFavoritesBooks!: number;

  ngOnInit(): void {
    const subscription = forkJoin({
      noOfFavMovies: this.favoritesService.getNumberOfFavoriteMovies(),
      noOfFavBooks: this.favoritesService.getNumberOfFavoriteBooks()
    }).subscribe({
      next: counts => {
        this.numberOfFavoritesMovies = counts.noOfFavMovies.valueOf();
        this.numberOfFavoritesBooks =  counts.noOfFavBooks.valueOf();
      }
    });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
  }
}
