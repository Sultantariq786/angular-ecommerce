import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyB55xP3QfaGS41LOyPzXyuxAlCMJx3vNIk',
      authDomain: 'products-8bcf0.firebaseapp.com',
      databaseURL: 'https://products-8bcf0.firebaseio.com',
      projectId: 'products-8bcf0',
      storageBucket: 'products-8bcf0.appspot.com',
      messagingSenderId: '1051042463603'
    });
  }

}
