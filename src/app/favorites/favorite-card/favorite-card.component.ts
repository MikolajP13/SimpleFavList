import { Component, inject, input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { DialogMode, Favorite, FavoriteCategory } from '../favorite.model';
import { MatDialog } from '@angular/material/dialog';
import { FavoriteDialogComponent } from '../favorite-dialog/favorite-dialog.component';
import { FavoritesService } from '../favorite-service/favorites.service';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-favorite-card',
  standalone: true,
  imports: [MatCardModule, MatMenuModule, MatButtonModule, MatIconModule, NgOptimizedImage],
  templateUrl: './favorite-card.component.html',
  styleUrl: './favorite-card.component.css',
})
export class FavoriteCardComponent {
  private favoritesService = inject(FavoritesService);
  favDialog = inject(MatDialog);
  category = input.required<FavoriteCategory>();
  fav = input.required<Favorite>();

  onEdit() {
    this.favDialog.open(FavoriteDialogComponent, {
      data: {
        dialogMode: DialogMode.Edit,
        favoriteCategory: this.category(),
        favorite: this.fav(),
      },
      autoFocus: false,
      panelClass: 'fav-dialog',
    });
  }

  onDelete() {
    this.favoritesService.deleteFavorite(this.fav().id).subscribe();
  }
}
