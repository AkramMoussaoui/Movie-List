import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../services/movies.service";
import { IMovies } from "../Popular";

@Component({
  selector: "app-popular-movie",
  templateUrl: "./popular-movie.component.html",
  styleUrls: ["./popular-movie.component.css"]
})
export class PopularMovieComponent implements OnInit {
  movies: IMovies[];

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.movieService.getPopularMovies("en-US", "1").subscribe(data => {
      this.movies = data;
    });
  }
}
