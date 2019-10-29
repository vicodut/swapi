import { Component, OnInit } from '@angular/core';
import {SwapiService} from '../../services/swapi.service';
import {ModalController} from '@ionic/angular';
import {FilmComponent} from '../film/film.component';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss'],
})
export class FilmsListComponent implements OnInit {
  private films: any = [];

  constructor(
    private swapiService: SwapiService,
    private modalController: ModalController) {

    this.swapiService.getFilmsList().subscribe((data) => {
      this.films = data.results.sort((fA, fB) => fA.episode_id - fB.episode_id);
    });
  }

  goToFilm(i: number) {
    this.modalController.create({
      component: FilmComponent,
      componentProps: this.films[i]
    }).then((modal) => modal.present());
  }


  ngOnInit() {}

}
