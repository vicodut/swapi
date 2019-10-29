import { Component, OnInit } from '@angular/core';
import {ModalController, NavParams} from '@ionic/angular';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss'],
})
export class FilmComponent implements OnInit {
  film: any;

  constructor(navParams: NavParams, private modalController: ModalController) {
    this.film = navParams.data;
  }

  ngOnInit() {}

  dismiss() {
    return this.modalController.dismiss();
  }

}
