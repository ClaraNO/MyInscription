import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage'

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBalxkwpnx9luSrNm1mCcufuQtZtetYExU",
  authDomain: "myinscription-13431.firebaseapp.com",
  projectId: "myinscription-13431",
  storageBucket: "myinscription-13431.appspot.com",
  messagingSenderId: "292721454557",
  appId: "1:292721454557:web:dd74bf953066c328cd9a34",
  measurementId: "G-5NZ3NQD4L9"
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
imports: [
  BrowserModule,
  IonicModule.forRoot(),
  FormsModule,
  ReactiveFormsModule,
  AppRoutingModule,
  AngularFireModule.initializeApp(firebaseConfig),
  AngularFireDatabaseModule,
  AngularFireAuthModule,
  AngularFireStorageModule
],
  providers: [
    //StatusBar,
    //SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}



