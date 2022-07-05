import { Route } from '@angular/router';
import { CharactersComponent } from './characters.component';

export const activitiesRoutes: Route[] = [
    {
        path     : 'characters',
        component: CharactersComponent,
    }
];