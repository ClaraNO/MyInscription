import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  connected: boolean

  constructor(
    public toastController: ToastController,
    public afAuth: AngularFireAuth,
    public afDB: AngularFireDatabase

  ) {
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
        this.connected = false;
      } else {
        console.log('connecté : ' +auth.uid);
        this.connected = true;
      }
    })
  }

  dataUser = {
    email: '',
    password: ''
 };

 login() {
  this.afAuth.signInWithEmailAndPassword(this.dataUser.email, this.dataUser.password);
   this.dataUser = {
     email: '',
     password: ''
   };
}

logout() {
  this.afAuth.signOut();
}

}



