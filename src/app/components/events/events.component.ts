import { ModalDetailsEventsComponent } from './modal-details-events/modal-details-events.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {

  constructor(
    private _marvelService: MarvelApiService,
    private _matDialog: MatDialog,
  ) { }

  events!: Observable<any>;

  ngOnInit(): void {
    this.getEvents();
  }

  getEvents() {
    this.events = this._marvelService.getEvents();
  }

  showDetailsEvents(event: any) {
    const dialogRef = this._matDialog.open(ModalDetailsEventsComponent, {
      data: { event },
      width: '60vw',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
