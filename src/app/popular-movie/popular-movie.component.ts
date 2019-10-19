import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../services/movies.service";
import { IMovies } from "../Popular";
import { FilterService } from "../services/filter.service";

@Component({
  selector: "app-popular-movie",
  templateUrl: "./popular-movie.component.html",
  styleUrls: ["./popular-movie.component.css"]
})
export class PopularMovieComponent implements OnInit {
  movies: IMovies[];
  filteredMovies: IMovies[];
  listFilter: string;

  performFilter(filterBy: string): IMovies[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter(
      (movie: IMovies) =>
        movie.title.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
  constructor(
    private movieService: MoviesService,
    private filter: FilterService
  ) {}

  ngOnInit() {
    this.movieService.getPopularMovies("en-US", "1").subscribe(data => {
      this.movies = data;
      this.filteredMovies = data;
    });
    this.filter.currentMessage.subscribe(message => {
      this.listFilter = message;
      this.filteredMovies = this.listFilter
        ? this.performFilter(this.listFilter)
        : this.movies;
    });
  }
}
