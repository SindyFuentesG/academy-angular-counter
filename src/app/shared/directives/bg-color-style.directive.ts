import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBgColorStyle]',
})
export class BgColorStyleDirective {
  constructor(element: ElementRef) {
    element.nativeElement.style.backgroundColor = 'blue';
    element.nativeElement.style.color = 'white';
  }
}
