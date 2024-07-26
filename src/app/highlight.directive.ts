import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el:ElementRef,private rendrer:Renderer2) { 

  }

 @HostListener('mouseenter') onMouseEnter(){
    this.rendrer.addClass(this.el.nativeElement,'highlight')
  }
  @HostListener('mouseout')  onMouseOut(){
    this.rendrer.removeClass(this.el.nativeElement,'highlight')

  }
}
