import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit, AfterViewInit {

  constructor() { }
  private _privateName;
get privateName() {
  return this._privateName;
}
set privateName (value: string) {
 if (value.length === 5) {
   this._privateName = value;
 }
}
@ViewChild('nameRef') nameelementRef: ElementRef;
  public price = 27;
  public message = '';
  title = 'Test';
  public color = '';
  userName = 'Amrit upadhyay';
  myId = 'txtuserName';
  isDisabled = false;
  classSucess = 'text-sucess';
  haserror = false;
  public isSpecial = true;
  public months = ['jan', 'fab', 'mar', 'Apr', 'May', 'jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public messageClass = {
    'text-sucess': !this.haserror,
    'text-danger' : this.haserror,
    'text-special': this.isSpecial
  };
  public customeStyle = {
    color: 'yellow',
    fontstyle: 'italic'
  };
  public welcomemsg = '';
  onClick (value) {
    console.log(value.value);

  }
  validate( value) {
    if (value === 'Amrit' ) {
      alert('Hi Amrit');
    }
    console.log(value)
  }

  ngOnInit() {
  }
  ngAfterViewInit() {
   this.nameelementRef.nativeElement.focus();
  }


}
