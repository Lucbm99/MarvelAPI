import { ModalDetailsCharactersComponent } from './modal-details-characters/modal-details-characters.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { MarvelApiService } from 'src/app/services/marvel-api.service';
import { FormControl } from '@angular/forms';
import { debounceTime, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-characters',
  templateUrl: `./characters.component.html`,
  styleUrls: [`./characters.component.scss`],
})
export class CharactersComponent implements OnInit {
  searchInputControl: FormControl = new FormControl();
  showLoader: boolean = false;
  characters!: Observable<any>;

  constructor(
    private _marvelService: MarvelApiService,
    private _matDialog: MatDialog,
  ) {}


  ngOnInit(): void {
    this.showLoader = true;
    this.getCharacters();
    console.log(this.showLoader)
    if(Object.values(this.characters).length > 0) {
      console.log(this.showLoader)

      this.showLoader = false; 
      console.log(this.showLoader)

    }

    if(this.showLoader === false) {
      this.showLoader = true;
    }
  }
  
  getCharacters() {
    this.characters = this._marvelService.getCharacters();
  }

  showDetailsCharacters(character: any) {
    const dialogRef = this._matDialog.open(ModalDetailsCharactersComponent, {
      data: { character },
      width: '60vw',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
