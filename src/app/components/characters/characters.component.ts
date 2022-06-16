import { ModalDetailsCharactersComponent } from './../modal-details-characters/modal-details-characters.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: `./characters.component.html`,
  styleUrls: [`./characters.component.scss`],
})
export class CharactersComponent implements OnInit {

  characters!: Observable<any>;
  comics!: Observable<any>;
  creators!: Observable<any>;
  events!: Observable<any>;
  series!: Observable<any>;
  stories!: Observable<any>;
  
  constructor(
    private _marvelService: MarvelApiService,
    private _matDialog: MatDialog,
  ) {}


  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters() {
    this.characters = this._marvelService.getCharacters();
  }

  openDialog(character: any) {
    const dialogRef = this._matDialog.open(ModalDetailsCharactersComponent, {
      data: { character },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
