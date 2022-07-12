import { HttpClient } from '@angular/common/http';
import { ModalDetailsCharactersComponent } from './modal-details-characters/modal-details-characters.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-characters',
  templateUrl: `./characters.component.html`,
  styleUrls: [`./characters.component.scss`],
})
export class CharactersComponent implements OnInit {
  searchInputControl: FormControl = new FormControl();
  characters!: Observable<any>;
  showLoaderCharacters: boolean = true;
  dataCharacters: any;

  constructor(
    private _marvelService: MarvelApiService,
    private _matDialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this._marvelService.getCharacters().subscribe((response) => {
      if (response) {
        this.showLoaderCharacters = false;
      }
      this.dataCharacters = response;
    });
  }

  showDetailsCharacters(character: any) {
    const dialogRef = this._matDialog.open(ModalDetailsCharactersComponent, {
      data: { character },
      width: '60vw',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
