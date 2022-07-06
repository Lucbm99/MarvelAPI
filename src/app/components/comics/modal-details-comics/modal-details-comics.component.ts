import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-details-comics',
  templateUrl: './modal-details-comics.component.html',
  styleUrls: ['./modal-details-comics.component.scss']
})
export class ModalDetailsComicsComponent implements OnInit {

  public comics; 

  constructor(
    public matDialogRef: MatDialogRef<ModalDetailsComicsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.comics = data;
  }

  ngOnInit(): void {
  }

  closeModalComics(): void {
    this.matDialogRef.close();
  }
}
