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
<<<<<<< HEAD
=======

  consultarUsuarioActual() {
    this.restProvider.getUsuarioActual()
      .then((data: any) => {
        this.nombre = data.nombre+" "+data.apellido;
      });
  }

  mostrarLogros() {
    this.navCtrl.push(LogroPage);
  }

>>>>>>> ac801d4dddd68f2c3318a35a3e02b0d321a5a3b5
}
