import { ModalDetailsSeriesComponent } from './modal-details-series/modal-details-series.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
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
    private _marvelService: MarvelApiService,
    private _matDialog: MatDialog,
  ) { }

  series!: Observable<any>;

  ngOnInit(): void {
    this.getSeries();
  }

  getSeries() {
    this.series = this._marvelService.getSeries();
  }

  showDetailsSeries(serie: any) {
    const dialogRef = this._matDialog.open(ModalDetailsSeriesComponent, {
      data: { serie },
      width: '60vw',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}


