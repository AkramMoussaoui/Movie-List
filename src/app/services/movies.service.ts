import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IMovies, IPopular } from "../Popular";
import { IMovieID } from "../Details";
import { ICredit } from "../Credit";
import { DomSanitizer } from "@angular/platform-browser";
@Injectable({
  providedIn: "root"
})
export class MoviesService {
  private url: string = "https://api.themoviedb.org/3/movie/";
  private api_key: string = "43b746b767edc8522cb6200aa1821bcb";

  constructor(
    private httpClient: HttpClient,
    private sanitizer: DomSanitizer
  ) {}

  getPopularMovies(langage: string, page: string): Observable<IMovies[]> {
    const params = new HttpParams()
      .set("api_key", this.api_key)
      .set("language", langage)
      .set("page", page);
    return this.httpClient.get<IPopular>(`${this.url}popular`, { params }).pipe(
      map(data => {
        data.results.forEach(item => {
          const imgUrl = "http://image.tmdb.org/t/p/w300" + item.poster_path;
          item.poster_path = this.sanitizer.bypassSecurityTrustStyle(
            `url(${imgUrl})`
          );
        });
        return data.results;
      })
    );
  }

  getMovieById(langage: string, id: string): Observable<IMovieID> {
    const params = new HttpParams()
      .set("api_key", this.api_key)
      .set("language", langage);
    return this.httpClient.get<IMovieID>(`${this.url}${id}`, { params }).pipe(
      map(data => {
        return data;
      })
    );
  }

  getMovieCredit(id: string): Observable<ICredit> {
    const params = new HttpParams().set("api_key", this.api_key);
    return this.httpClient
      .get<ICredit>(`${this.url}${id}/credits`, { params })
      .pipe(
        map(data => {
          return data;
        })
      );
  }

  getTopRatedMovie(langage: string, page: string): Observable<IMovies[]> {
    const params = new HttpParams()
      .set("api_key", this.api_key)
      .set("language", langage)
      .set("page", page);
    return this.httpClient
      .get<IPopular>(`${this.url}top_rated`, { params })
      .pipe(
        map(data => {
          data.results.forEach(item => {
            const imgUrl = "http://image.tmdb.org/t/p/w300" + item.poster_path;
            item.poster_path = this.sanitizer.bypassSecurityTrustStyle(
              `url(${imgUrl})`
            );
          });
          return data.results;
        })
      );
  }

  getVideo(id: string): Observable<string> {
    const params = new HttpParams().set("api_key", this.api_key);
    return this.httpClient.get<any>(`${this.url}${id}/videos`, { params }).pipe(
      map(data => {
        return data.results[0].key;
      })
    );
  }
}
