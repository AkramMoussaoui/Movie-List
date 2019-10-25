export interface IMovies {
  popularity: number;
  vote_count: number;
  video: boolean;
  poster_path: any;
  id: number;
  adult: boolean;
  backdrop_path: string;
  original_language: string;
  original_title: string;
  genre_ids: number[];
  title: string;
  vote_average: number;
  overview: string;
  release_date: string;
}

export interface IPopular {
  page: number;
  total_results: number;
  total_pages: number;
  results: IMovies[];
}
