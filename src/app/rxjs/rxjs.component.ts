import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
    constructor() { }

  ngOnInit() {
    const foo = Observable.create(function (observer) {
      console.log('Hello');
      observer.next(42);
      observer.next(100); // "return" another value
      observer.next(200); // "return" yet another
    });

    const abc = {
      next: function(value) {
       console.log(value);
      },
      error: function (error) {
       console.log(error);
      },
      complete: function () {
      console.log('done');
      }
      };

      Observable.create(function(obs) {
      obs.next('A value');
      }).subscribe(abc);

    console.log('before');
    foo.subscribe(function (x) {
      console.log(x);
    });
    console.log('after');
  }
}
