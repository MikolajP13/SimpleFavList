import { Component } from '@angular/core';
import { FavoriteListComponent } from "../favorites/favorite-list/favorite-list.component";

@Component({
  selector: 'app-movies',
  standalone: true,
  imports: [FavoriteListComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

}
