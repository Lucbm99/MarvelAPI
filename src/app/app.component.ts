import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelApiService } from './services/marvel-api.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalDetailsCharactersComponent } from './components/modal-details-characters/modal-details-characters.component';

@Component({
  selector: 'app-root',
  templateUrl: `./app.component.html`,
  styleUrls: [`./app.component.scss`],
})
export class AppComponent implements OnInit {

  allCharacters!: Observable<any>;
  
  constructor(
    private _marvelService: MarvelApiService,
    private _matDialog: MatDialog,
  ) {}


  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.allCharacters = this._marvelService.getAllCharacters();
  }

  openDialog() {
    const dialogRef = this._matDialog.open(ModalDetailsCharactersComponent, {data: {}});
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
