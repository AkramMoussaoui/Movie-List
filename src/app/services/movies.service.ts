import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { IMovies, IPopular } from "../Popular";
@Injectable({
  providedIn: "root"
})
export class MoviesService {
  private url: string = "https://api.themoviedb.org/3/movie/";
  private api_key: string = "43b746b767edc8522cb6200aa1821bcb";

  constructor(private httpClient: HttpClient) {}

  getPopularMovies(langage: string, page: string): Observable<IMovies[]> {
    const params = new HttpParams()
      .set("api_key", this.api_key)
      .set("langage", langage)
      .set("page", page);
    return this.httpClient.get<IPopular>(`${this.url}popular`, { params }).pipe(
      map(data => {
        return data.results;
      })
    );
  }
}
