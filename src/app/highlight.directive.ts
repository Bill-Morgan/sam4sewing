import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() defaultColor: string;

  constructor(private el: ElementRef) {
    // el.nativeElement.style.backgroundColor = 'yellow';
   }

   @HostListener('mouseenter') onMouseEnter() {
    console.log("mouse enter")
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
