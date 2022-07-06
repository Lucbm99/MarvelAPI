import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-details-series',
  templateUrl: './modal-details-series.component.html',
  styleUrls: ['./modal-details-series.component.scss']
})
export class ModalDetailsSeriesComponent implements OnInit {

  public series; 

  constructor(
    public matDialogRef: MatDialogRef<ModalDetailsSeriesComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.series = data;
  }
  
  ngOnInit(): void {
  }

  closeModalSeries(): void {
    this.matDialogRef.close();
  }
}
