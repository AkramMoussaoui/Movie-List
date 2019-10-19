import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PopularMovieComponent } from "./popular-movie/popular-movie.component";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    component: PopularMovieComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
