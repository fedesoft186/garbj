import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
/*
 Generated class for the RestProvider provider.
 See https://angular.io/guide/dependency-injection for more info on providers
 and Angular DI.
*/
@Injectable()
export class RestProvider {
  //apiUrl = 'http://localhost:8000/';
  apiUsuarioActual = 'api/user/';
  apiUrl = 'http://378675b8.ngrok.io/';
  loginService = 'api/login/';

  apiUsuarios = 'usuarios/';
  apiPremio = 'premios/';
  apiPunto = 'puntos/';
  apiLogro = 'logros/';

  constructor(public http: HttpClient) {
    console.log('Hello RestProvider Provider');
  }

  login(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.loginService, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  registro(data) {
    return new Promise((resolve, reject) => {
      this.http.post(this.apiUrl + this.apiUsuarios, data)
        .subscribe(res => {
          resolve(res);
        }, (err) => {
          reject(err);
        });
    });
  }

  getPremio() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.apiPremio, {
        headers: new HttpHeaders().set('Authorization', 'token ' + window.localStorage['token'])
      }).subscribe(data => {
        resolve(data);
      }, err => {
        console.log(err);
      });
    });
  }

  getUsuarioActual() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.apiUsuarioActual, {
        headers: new HttpHeaders().set('Authorization', 'token ' +
          window.localStorage['token'])
      }).subscribe((data: any) => {
        let usuario = this.getUsuario(data.pk);
        resolve(usuario);
      }, err => {
        console.log(err);
      });
    });
  }

  getUsuario(id) {
    return new Promise(resolve => {
      this.http.get(this.apiUrl + this.apiUsuarios + '?user_id=' + id, {
        headers: new HttpHeaders().set('Authorization', 'token ' +
          window.localStorage['token'])
      }).subscribe(data => {
        resolve(data[0]);
      }, err => {
        console.log(err);
      });
    });
  }
}
