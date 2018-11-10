import {
  Component,
  ViewChild,
  ViewChildren,
  QueryList,
  AfterViewInit,
  OnInit
} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDiB8e86nv5ChfCOiNb4tb7v086wLMhzWg',
  authDomain: 'test-18d32.firebaseapp.com',
  databaseURL: 'https://test-18d32.firebaseio.com',
  projectId: 'test-18d32',
  storageBucket: 'test-18d32.appspot.com',
  messagingSenderId: '511080378066'
};
firebase.initializeApp(config);
  }
}
