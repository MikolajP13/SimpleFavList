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

export enum FavoriteCategory {
  Movie = 'Movie',
  Book = 'Book',
}

export enum DialogMode {
  New = 'New',
  Edit = 'Edit',
}
