import { Component, inject, input, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { FavoriteCardComponent } from '../favorite-card/favorite-card.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogMode, Favorite, FavoriteCategory } from '../favorite.model';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { FavoriteDialogComponent } from '../favorite-dialog/favorite-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [
    MatListModule,
    FavoriteCardComponent,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.css',
})
export class FavoriteListComponent implements OnInit {
  private router = inject(Router);
  favDialog = inject(MatDialog);
  favs = input.required<Favorite[]>();
  category!: FavoriteCategory;

  ngOnInit(): void {
    this.router.url.includes('movies')
      ? (this.category = FavoriteCategory.Movie)
      : (this.category = FavoriteCategory.Book);
  }

  onAddFavorite() {
    this.favDialog.open(FavoriteDialogComponent, {
      data: {
        dialogMode: DialogMode.New,
        favoriteCategory: this.category,
        favorite: null,
      },
      autoFocus: false,
      panelClass: 'fav-dialog'
    });
  }
}
