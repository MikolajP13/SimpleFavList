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
  Book = 'Book'
}
