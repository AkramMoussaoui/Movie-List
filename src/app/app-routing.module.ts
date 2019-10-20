import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PopularMovieComponent } from "./popular-movie/popular-movie.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { TopRatedComponent } from "./top-rated/top-rated.component";

const routes: Routes = [
  { path: "", redirectTo: "home/1", pathMatch: "full" },
  {
    path: "home/:id",
    component: PopularMovieComponent
  },
  {
    path: "movie/:id",
    component: MovieDetailsComponent
  },
  {
    path: "top/:id",
    component: TopRatedComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      onSameUrlNavigation: "reload"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
