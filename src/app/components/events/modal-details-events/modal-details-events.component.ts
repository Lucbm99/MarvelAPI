import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-modal-details-events',
  templateUrl: './modal-details-events.component.html',
  styleUrls: ['./modal-details-events.component.scss']
})
export class ModalDetailsEventsComponent implements OnInit {
  
  public events; 

  constructor(
    public matDialogRef: MatDialogRef<ModalDetailsEventsComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.events = data;
  }
  ngOnInit(): void {
  }

  closeModalEvents(): void {
    this.matDialogRef.close();
  }
}
