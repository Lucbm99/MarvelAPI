import { ModalDetailsCharactersComponent } from './../modal-details-characters/modal-details-characters.component';
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

    this.searchInputControl.valueChanges
    .pipe(
        debounceTime(300),
        switchMap((search) => {
            console.log(search);
            return this._marvelService.getCharacters();
        }),
        map(() => {
        })
      )
      .subscribe();
    }
  

  getCharacters() {
    this.characters = this._marvelService.getCharacters();
  }

  openDialog(character: any) {
    const dialogRef = this._matDialog.open(ModalDetailsCharactersComponent, {
      data: { character },
      width: '60vw',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
