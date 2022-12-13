import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appClickDirective]'
})
export class ClickDirectiveDirective {

  previousValue:any;

  constructor(private buttonEle: ElementRef, private renderer_: Renderer2) { }

  

}
