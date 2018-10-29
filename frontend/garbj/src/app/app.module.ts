import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { HttpClient, HttpClientModule } from '@angular/common/http';  //Se incluye de la guía IONIC
import { RestProvider } from '../providers/rest/rest';
import { PremioPage } from '../pages/premio/premio';    //Añadido por Login tutorial IONIC
import { RegistroPage } from '../pages/registro/registro';  //Añadido por Registro tutorial Registro Usuarios
import { LogroPage } from '../pages/logro/logro';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    PremioPage,  //Registrar las páginas IONIC
    RegistroPage,  //Registrar la página "Registro"
    LogroPage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule    //Se incluye de la guía IONIC
  ],
  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    PremioPage,    //Resgistrar las páginas IONIC
    RegistroPage,
    LogroPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    HttpClient        //Se incluye de la guía IONIC
  ]
})
export class AppModule {}
