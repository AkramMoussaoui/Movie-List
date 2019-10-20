import { Component, OnInit, OnDestroy } from "@angular/core";
import { IMovies } from "../Popular";
import { MoviesService } from "../services/movies.service";
import { FilterService } from "../services/filter.service";
import {
  ActivatedRoute,
  Router,
  RouterEvent,
  NavigationEnd
} from "@angular/router";
import { Subject } from "rxjs";
import { takeUntil, filter } from "rxjs/operators";

@Component({
  selector: "app-top-rated",
  templateUrl: "./top-rated.component.html",
  styleUrls: ["./top-rated.component.css"]
})
export class TopRatedComponent implements OnInit, OnDestroy {
  destroyed = new Subject<any>();
  movies: IMovies[];
  page: number;
  filteredMovies: IMovies[];
  listFilter: string;
  userLang: string;
  performFilter(filterBy: string): IMovies[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.movies.filter(
      (movie: IMovies) =>
        movie.title.toLocaleLowerCase().indexOf(filterBy) !== -1
    );
  }
  constructor(
    private movieService: MoviesService,
    private filter: FilterService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        filter((event: RouterEvent) => event instanceof NavigationEnd),
        takeUntil(this.destroyed)
      )
      .subscribe(() => {
        this.userLang = navigator.language || "en-US";
        this.page = +this.route.snapshot.params["id"];
        this.movieService
          .getTopRatedMovie(this.userLang, this.page.toString())
          .subscribe(data => {
            this.movies = data;
            this.filteredMovies = data;
          });
        this.filter.currentMessage.subscribe(message => {
          this.listFilter = message;
          this.filteredMovies = this.listFilter
            ? this.performFilter(this.listFilter)
            : this.movies;
        });
      });
    this.userLang = navigator.language || "en-US";
    this.page = +this.route.snapshot.params["id"];
    this.movieService
      .getTopRatedMovie(this.userLang, this.page.toString())
      .subscribe(data => {
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

  navigate(sym): void {
    sym === 0
      ? this.router.navigate([`/top/${this.page - 1}`])
      : this.router.navigate([`/top/${this.page + 1}`]);
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }
}
