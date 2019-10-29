import {Host, Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {

  constructor( private http: HttpClient) { }

  private HOST = 'https://swapi.co/api';
  private FILMS_URL = 'films';

  static ping() {
    console.log('hello Swapi');
  }

  public getFilmsList(): Observable<any> {
    return this.http.get<any>(`${this.HOST}/${this.FILMS_URL}`);
  }

  public getFilmInfo(filmId: number): Observable<any> {
   return this.http.get<any>(`${this.HOST}/${this.FILMS_URL}/${filmId}`);
  }
}
