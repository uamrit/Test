import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child-msg',
  template: `
    <p>
     {{ contentMsg }}
    </p>
  `,
  styles: []
})
export class ViewChildMsgComponent implements OnInit {
  public contentMsg = 'I m from viewchildmsg component';

  constructor() { }

  ngOnInit() {
  }

}
