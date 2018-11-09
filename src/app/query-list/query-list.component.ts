import {
  Component,
  AfterViewInit,
  ViewChild,
  ViewChildren,
  QueryList
} from '@angular/core';
import { CustomeAttributeDirective } from '../directive/custom-attribute.directive';
import { ViewchildComponent } from '../ViewChild/viewchild/viewchild.component';
import { createViewChildren } from '@angular/compiler/src/core';
import { ViewChildMsgComponent } from '../ViewChild/view-child-msg/view-child-msg.component';

@Component({
  selector: 'app-query-list',
  templateUrl: './query-list.component.html',
  styleUrls: ['./query-list.component.css']
})
export class QueryListComponent implements AfterViewInit {
  public SelectedColor: string;
  @ViewChild(ViewchildComponent)
  child1: ViewchildComponent;

  // declare the QueryList variable
  @ViewChildren(ViewchildComponent)
  child2: QueryList<ViewchildComponent>;

  // declare array that hold the queryList result
  // note this array only set in ngAfterviewInit method
  private childviewArray: Array<ViewchildComponent>;

  @ViewChild(ViewChildMsgComponent)
  ngcontentChild: ViewChildMsgComponent;

  sendMsg(): void {
    // here you have set the msg to children component through viewchild
    this.child1.msg = 'I am coming from parent';
    this.child1.msgTitle = 'welcome to parent title';
    this.ngcontentChild.contentMsg = ' content msg set by Parent';
  }

  sendMsg2(): void {
    // here you have set the msg to children component through viewchild
    this.childviewArray[1].msg = 'I am coming from parent';
    this.childviewArray[1].msgTitle = 'welcome to parent title';
  }
  ngAfterViewInit() {
    this.childviewArray = this.child2.toArray();
  }
}
