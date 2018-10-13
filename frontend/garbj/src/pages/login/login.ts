import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  usuario: String;
  clave: String;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  iniciarSesion() {
    /* Llamado al api de forma genérica:  localhost:8000/api/login/
    console.log(this.usuario);
    console.log(this.clave);
    */
    var data = { 'username': this.usuario, 'password': this.clave };
    this.restProvider.login(data)
      .then(data => {
        console.log(data);
      });
  }

}
