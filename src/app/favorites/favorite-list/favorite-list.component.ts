import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { FavoriteCardComponent } from '../favorite-card/favorite-card.component';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-favorite-list',
  standalone: true,
  imports: [MatListModule, FavoriteCardComponent, MatButtonModule, MatIconModule],
  templateUrl: './favorite-list.component.html',
  styleUrl: './favorite-list.component.css',
})
export class FavoriteListComponent {
  items = [1, 2, 3];
}
