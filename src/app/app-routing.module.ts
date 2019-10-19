import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PopularMovieComponent } from "./popular-movie/popular-movie.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: PopularMovieComponent
  },
  {
    path: "movie/:id",
    component: MovieDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
