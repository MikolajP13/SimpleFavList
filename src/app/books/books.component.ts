import { Component } from '@angular/core';
import { FavoriteListComponent } from "../favorites/favorite-list/favorite-list.component";

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [FavoriteListComponent],
  templateUrl: './books.component.html',
  styleUrl: './books.component.css'
})
export class BooksComponent {

}
