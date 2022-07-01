import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {

  constructor(
    private _marvelService: MarvelApiService
  ) { }

  stories!: Observable<any>;

  ngOnInit(): void {
    this.getStories();
  }

  getStories() {
    this.stories = this._marvelService.getStories();
  }
}