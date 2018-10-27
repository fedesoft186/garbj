import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  usuario: String;

  constructor(public navCtrl: NavController, public restProvider: RestProvider) {

  }

  ionViewDidLoad() {
    console.log("Entramos");
    this.consultarUsuarioActual();
  }

  consultarUsuarioActual() {
    this.restProvider.getUsuarioActual()
      .then((data: any) => {
        this.usuario = data.id;
        console.log(this.usuario);
      });
  }

}
