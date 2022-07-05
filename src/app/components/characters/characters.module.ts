import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CharactersComponent } from './characters.component';
import { activitiesRoutes } from './characters.routing';

@NgModule({
    declarations: [
        CharactersComponent
    ],
    imports     : [
        RouterModule.forChild(activitiesRoutes),
        MatIconModule,
    ]
})
export class CharactersModule
{
}