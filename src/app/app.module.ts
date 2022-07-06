import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalDetailsCharactersComponent } from './components/characters/modal-details-characters/modal-details-characters.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComicsComponent } from './components/comics/comics.component';
import { EventsComponent } from './components/events/events.component';
import { SeriesComponent } from './components/series/series.component';
import { CharactersComponent } from './components/characters/characters.component';
import { ModalDetailsComicsComponent } from './components/comics/modal-details-comics/modal-details-comics.component';
import { ModalDetailsEventsComponent } from './components/events/modal-details-events/modal-details-events.component';
import { ModalDetailsSeriesComponent } from './components/series/modal-details-series/modal-details-series.component';

@NgModule({
  declarations: [
    AppComponent,
    CharactersComponent,
    ModalDetailsCharactersComponent,
    NavbarComponent,
    ComicsComponent,
    EventsComponent,
    SeriesComponent,
    ModalDetailsComicsComponent,
    ModalDetailsEventsComponent,
    ModalDetailsSeriesComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule, 
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatListModule,
    MatSidenavModule,
    MatDialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
