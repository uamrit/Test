import { Component, OnInit, ViewChild, AfterViewInit, ContentChild, AfterContentInit } from '@angular/core';
import { ViewChildMsgComponent } from '../view-child-msg/view-child-msg.component';

@Component({
  selector: 'app-viewchild',
  template: `
    <h3>
      {{msgTitle}}
    </h3>
    <h4>{{ msg}} </h4>
    <ng-content></ng-content>
    `,
  styles: []
})
export class ViewchildComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChild(ViewChildMsgComponent) child: ViewChildMsgComponent;
  @ContentChild(ViewChildMsgComponent) contentChild: ViewChildMsgComponent;

  constructor() { }
  public msg = 'I m ViewchildComponent reside in AppComponent';
  public msgTitle = 'Welcom to child component';

  ngOnInit() {
  }
 ngAfterViewInit() {
   this.child.contentMsg = 'I m set by  ViewchildComponent';
 }
 ngAfterContentInit () {
   this.contentChild.contentMsg = 'I m set by  ViewchildComponent ngAfterContentInit ';
 }
}
