import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ServicesModule } from '../services/services.module';

import { HomePage } from './home/home.page';
import {FilmComponent} from './film/film.component';
import {FilmsListComponent} from './films-list/films-list.component';

@NgModule({
  imports: [
    CommonModule,
    ServicesModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: '',
            component: FilmsListComponent
          },
          {
            path: ':id',
            component: FilmComponent
          }
        ]
      },
    ])
  ],
  declarations: [HomePage, FilmComponent, FilmsListComponent]
})
export class HomePageModule {}
