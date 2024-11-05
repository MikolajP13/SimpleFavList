export interface Favorite {
  id: string;
  category: FavoriteCategory;
  creator: string;
  releaseYear: string;
  title: string;
  description: string;
  imgUrl: string;
}

export enum FavoriteCategory {
  Movie = 'Movie',
  Book = 'Book',
}

export interface FavoriteDialogData {
  dialogMode: DialogMode;
  favoriteCategory: FavoriteCategory;
  favorite: Favorite;
}

export enum DialogMode {
  New = 'New',
  Edit = 'Edit',
}
