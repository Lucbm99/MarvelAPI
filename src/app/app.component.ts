import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelApiService } from './services/marvel-api.service';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html` 
})
export class AppComponent implements OnInit {

  allCharacters!: Observable<any>;
  
  constructor(
    private _marvelService: MarvelApiService
  ) {}


  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.allCharacters = this._marvelService.getAllCharacters();
  }
}
