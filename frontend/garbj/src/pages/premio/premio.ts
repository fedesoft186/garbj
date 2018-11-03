import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';
@IonicPage()
@Component({
  selector: 'page-Premio',
  templateUrl: 'Premio.html',
})
export class PremioPage {
  Premio: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }
  ionViewDidLoad() {
    this.consultarPremio();
  }
  consultarPremio() {
    this.restProvider.getPremio()
      .then(data => {
        this.Premio = data;
      });
  }

  cerrarSesion() {
    localStorage.clear(); //Para borrar token e información de navegación
    this.navCtrl.setRoot(LoginPage); // Para redirgir a otra página sin opción de retorno 
  }
}
