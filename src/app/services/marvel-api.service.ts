import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Observable
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  private PUBLIC_KEY = '5ed6832b938c1b51bc9a277d43f6fe68';
  private HASH = '653226b552343d680ddbffbd62e0b7ea';
  private baseUrl: string = 'https://gateway.marvel.com/v1/';  
  
  constructor(
    private _httpClient: HttpClient,
  ) { }

    getCharacters(): Observable<any> {
      return this._httpClient.get<any>(`${this.baseUrl}public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`)
      .pipe(
        map((data: any) => 
          data.data.results
        ))
    }

    getComics(): Observable<any> {
      return this._httpClient.get<any>(`${this.baseUrl}public/comics?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`)
      .pipe(
        map((data: any) => 
          data.data.results
        ))
    }

    getCreators(): Observable<any> {
      return this._httpClient.get<any>(`${this.baseUrl}public/creators?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`)
      .pipe(
        map((data: any) => 
          data.data.results
        ))
    }

    getEvents(): Observable<any> {
      return this._httpClient.get<any>(`${this.baseUrl}public/events?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`)
      .pipe(
        map((data: any) => 
          data.data.results
        ))
    }

    getSeries(): Observable<any> {
      return this._httpClient.get<any>(`${this.baseUrl}public/series?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`)
      .pipe(
        map((data: any) => 
          data.data.results
        ))
    }

    getStories(): Observable<any> {
      return this._httpClient.get<any>(`${this.baseUrl}public/stories?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`)
      .pipe(
        map((data: any) => 
          data.data.results
        ))
    }

}
