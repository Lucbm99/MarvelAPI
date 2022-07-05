import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersModule } from './components/characters/characters.module';
import { AppModule } from './app.module';

const routes: Routes = [
  {path: 'characters', loadChildren: () => import('./components/characters/characters.module').then(m => m.CharactersModule)},
  {path: 'comics', loadChildren: () => import('./app.module').then(m => m.AppModule)},
  {path: 'creators', loadChildren: () => import('./app.module').then(m => m.AppModule)},
  {path: 'events', loadChildren: () => import('./app.module').then(m => m.AppModule)},
  {path: 'series', loadChildren: () => import('./app.module').then(m => m.AppModule)},
  {path: 'stories', loadChildren: () => import('./app.module').then(m => m.AppModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
