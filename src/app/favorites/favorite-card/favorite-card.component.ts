import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-favorite-card',
  standalone: true,
  imports: [MatCardModule, MatMenuModule, MatButtonModule, MatIconModule],
  templateUrl: './favorite-card.component.html',
  styleUrl: './favorite-card.component.css',
})
export class FavoriteCardComponent {}