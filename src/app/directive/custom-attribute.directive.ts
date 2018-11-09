import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector : '[appCustomHover]'
})

export class CustomeAttributeDirective {
  @Input('appCustomHover') highlightColor: string;

constructor (private el: ElementRef ) { }

@HostListener('mouseenter') onMouseEnter() {
  this.hilightColor(this.highlightColor);
}

@HostListener('mouseleave') onMouseLeave() {
  this.hilightColor(null);
}
@HostListener('mouseover') onHover() {
//  window.alert('hover');
}


public hilightColor(color) {

  this.el.nativeElement.style.backgroundColor = color;
}

}
