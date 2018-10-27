import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { HomePage } from '../home/home';
import { PremioPage } from '../premio/premio';
import { RegistroPage } from '../registro/registro';
import { ToastController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    if (window.localStorage['token']) {
      this.navCtrl.push(HomePage);
    }
  }
  iniciarSesion() {
    /* Llamado al api de forma genérica:  localhost:8000/api/login/
    console.log(this.usuario);
    console.log(this.clave);
    */
    var data = { 'username': this.usuario, 'password': this.clave };
    this.restProvider.login(data).then((result: any) => {
      window.localStorage['token'] = result.key;
      this.navCtrl.push(HomePage);    //Resgistrar las páginas IONIC
    }, (err) => {
      console.log(err);
    });

    const toast = this.toastCtrl.create({
      message: 'Usuario: ' + this.usuario + 'Clave: ' + this.clave,
      duration: 3000
    });
    toast.present();
  }
  mostrarRegistro() {   //Añadido método para registro
    this.navCtrl.push(RegistroPage);
  }
}
