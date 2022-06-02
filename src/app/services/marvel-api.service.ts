import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Observable
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  private PUBLIC_KEY = '5ed6832b938c1b51bc9a277d43f6fe68';
  private HASH = '653226b552343d680ddbffbd62e0b7ea';
  private baseUrl: string = 'https://gateway.marvel.com';  
  
  constructor(
    private _httpClient: HttpClient,
  ) { }

    getAllCharacters(): Observable<any> {
      return this._httpClient.get<any>(`${this.baseUrl}/v1/public/characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`)
      .pipe(
        map((data: any) => 
          data.data.results
        ))
    }

}
