import { Component, OnInit } from "@angular/core";
import { MoviesService } from "../services/movies.service";
import { ActivatedRoute } from "@angular/router";
import { IMovieID } from "../Details";
import { ICredit, Crew } from "../Credit";
import { DomSanitizer } from "@angular/platform-browser";
@Component({
  selector: "app-movie-details",
  templateUrl: "./movie-details.component.html",
  styleUrls: ["./movie-details.component.css"]
})
export class MovieDetailsComponent implements OnInit {
  movie: IMovieID;
  credit: ICredit;
  writer: Crew[];
  director: Crew[];
  video: string = "https://www.youtube.com/embed/";
  url: any;
  constructor(
    private movieService: MoviesService,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.movieService
      .getMovieById("en-US", this.route.snapshot.params["id"])
      .subscribe(data => {
        this.movie = data;
      });
    this.movieService
      .getVideo(this.route.snapshot.params["id"])
      .subscribe(data => {
        this.url = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.video + data
        );
      });
    this.movieService
      .getMovieCredit(this.route.snapshot.params["id"])
      .subscribe(data => {
        this.credit = data;
        this.director = data.crew.filter(item => item.job === "Director");
        this.writer = data.crew.filter(item => item.job === "Writer");
      });
  }
}
