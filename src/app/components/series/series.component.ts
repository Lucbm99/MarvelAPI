import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  constructor(
    private _marvelService: MarvelApiService
  ) { }

  series!: Observable<any>;

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries() {
    this.series = this._marvelService.getSeries();
  }
}


