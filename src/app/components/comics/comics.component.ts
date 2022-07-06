import { ModalDetailsComicsComponent } from './modal-details-comics/modal-details-comics.component';
import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelApiService } from 'src/app/services/marvel-api.service';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  comics!: Observable<any>;
  
  constructor(
    private _marvelService: MarvelApiService,
    private _matDialog: MatDialog,  
  ) { }

  ngOnInit(): void {
    this.getComics();
  }

  getComics() {
    this.comics = this._marvelService.getComics();
  }

  
  showDetailsComics(comic: any) {
    const dialogRef = this._matDialog.open(ModalDetailsComicsComponent, {
      data: { comic },
      width: '60vw',
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }
}
