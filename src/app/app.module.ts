import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PopularMovieComponent } from "./popular-movie/popular-movie.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";
import { TopRatedComponent } from "./top-rated/top-rated.component";
import { NgxYoutubePlayerModule } from "ngx-youtube-player";
@NgModule({
  declarations: [
    AppComponent,
    PopularMovieComponent,
    HeaderComponent,
    FooterComponent,
    MovieDetailsComponent,
    TopRatedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxYoutubePlayerModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
