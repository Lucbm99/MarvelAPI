import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-details-characters',
  templateUrl: './modal-details-characters.component.html',
  styleUrls: ['./modal-details-characters.component.scss']
})
export class ModalDetailsCharactersComponent implements OnInit {

  public details; 

  constructor(
    public matDialogRef: MatDialogRef<ModalDetailsCharactersComponent>,
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { 
    this.details = data;
    console.log(this.details)
  }

  ngOnInit(): void {
  }

  closeModalCharacters(): void {
    this.matDialogRef.close();
  }

}
