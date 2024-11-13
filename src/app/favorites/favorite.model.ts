import { FormControl } from "@angular/forms";

export interface Favorite {
  id: string;
  category: FavoriteCategory;
  creator: string;
  releaseYear: string;
  title: string;
  description: string;
  imgUrl: string;
}

export interface FavoriteDialogData {
  dialogMode: DialogMode;
  favoriteCategory: FavoriteCategory;
  favorite: Favorite;
}

export type FavoriteNewEdit = Omit<Favorite, 'id'>;

export interface FavoriteForm {
  creator: FormControl<string>;
  releaseYear: FormControl<string>;
  title: FormControl<string>;
  description: FormControl<string>;
  imgUrl: FormControl<string>;
}

export enum FavoriteCategory {
  Movie = 'Movie',
  Book = 'Book',
}

export enum DialogMode {
  New = 'New',
  Edit = 'Edit',
}
