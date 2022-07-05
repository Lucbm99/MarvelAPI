import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalDetailsCharactersComponent } from './components/modal-details-characters/modal-details-characters.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatListModule } from '@angular/material/list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ComicsComponent } from './components/comics/comics.component';
import { CreatorsComponent } from './components/creators/creators.component';
import { EventsComponent } from './components/events/events.component';
import { SeriesComponent } from './components/series/series.component';
import { StoriesComponent } from './components/stories/stories.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalDetailsCharactersComponent,
    NavbarComponent,
    ComicsComponent,
    CreatorsComponent,
    EventsComponent,
    SeriesComponent,
    StoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
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
