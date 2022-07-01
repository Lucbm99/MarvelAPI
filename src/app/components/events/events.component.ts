import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(
    private _marvelService: MarvelApiService
  ) { }

  events!: Observable<any>;

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.events = this._marvelService.getEvents();
  }
}
