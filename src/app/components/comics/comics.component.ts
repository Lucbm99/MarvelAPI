import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  comics!: Observable<any>;
  
  constructor(
    private _marvelService: MarvelApiService
  ) { }

  ngOnInit(): void {
    this.getComics();
  }

  getComics() {
    this.comics = this._marvelService.getComics();
  }
}
