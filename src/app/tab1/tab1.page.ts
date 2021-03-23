import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(public firestore: AngularFirestore) {
    this.items = firestore.collection('Candidat').valueChanges();
    this.items = firestore.collection('Inscrire').valueChanges();
  }
  items: Observable<any[]>;
  
  
}

