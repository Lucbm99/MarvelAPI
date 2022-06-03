import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-details-characters',
  templateUrl: './modal-details-characters.component.html',
  styleUrls: ['./modal-details-characters.component.scss']
})
export class ModalDetailsCharactersComponent implements OnInit {

  constructor(
    public matDialogRef: MatDialogRef<ModalDetailsCharactersComponent>,
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  closeModalCharacters(): void {
    this.matDialogRef.close();
  }

}
