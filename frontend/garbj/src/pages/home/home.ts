import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LogroPage } from '../logro/logro';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nombre: String;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {

  }

  ionViewDidLoad() {
  }
}
