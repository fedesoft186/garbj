import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';
/**
* Generated class for the RegistroPage page.
*
* See https://ionicframework.com/docs/components/#navigation for more info
on
* Ionic pages and navigation.
*/
@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
/*
username = serializers.CharField(write_only=True,source="user.username")
password = serializers.CharField(write_only=True,source="user.password")
nombre = serializers.CharField(required=False)
apellido = serializers.CharField(required=False)
fecha_nacimiento = serializers.DateField(required=False)
correo = serializers.CharField(required=False)
*/
export class RegistroPage {
  username: String;
  clave: String;
  nombre: String;
  apellido: String;
  fecha_nacimiento: Date;
  correo: String;
  perfil: String;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public restProvider: RestProvider) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }
  iniciarRegistro() {
    var data = {
      'username': this.username,
      'password': this.clave,
      'first_name': this.nombre,
      'last_name': this.apellido,
      'email': this.correo,
      'fecha_nacimiento': this.fecha_nacimiento
      //'perfil': this.perfil,
      
    };
    this.restProvider.registro(data).then((result: any) => {
      this.navCtrl.setRoot(LoginPage);
    }, (err) => {
      console.log(err);
    });
  }
}