import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-creators',
  templateUrl: './creators.component.html',
  styleUrls: ['./creators.component.scss']
})
export class CreatorsComponent implements OnInit {

  constructor(
    private _marvelService: MarvelApiService
  ) { }


  creators!: Observable<any>;

  ngOnInit(): void {
    this.getCreators();
  }

  getCreators() {
    this.creators = this._marvelService.getCreators();
  }
}
