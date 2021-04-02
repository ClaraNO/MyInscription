import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  inscriptions:Observable<any[]>;
  firebaseTextNom: string;
  firebaseTextPrenom: string;
  firebaseTextMail: string;
  firebaseTextEta: string;
  firebaseTextBac: string;
  firebaseTextOptions: string;

  constructor(
    public firestore: AngularFirestore
  ) {
    this.inscriptions = this.firestore.collection('Inscriptions').valueChanges();
  }
  
  addFirebase() {
    this.firestore.collection('Inscriptions').add({
      floatingNom: this.firebaseTextNom,
      floatingPrenom: this.firebaseTextPrenom,
      floatingMail: this.firebaseTextMail,
      floatingEta: this.firebaseTextEta,
      floatingBac: this.firebaseTextBac,
      floatingOptions: this.firebaseTextOptions,
    });
  }

}
