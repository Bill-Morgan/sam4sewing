import { ViewportScroller } from "@angular/common";
import { Directive, ElementRef, HostListener, Input, OnDestroy, OnInit, Renderer2 } from "@angular/core";

@Directive({
    selector: '[appBannerScroll]'
})
export class BannerScroll {
    @Input() minY: number;
    @Input() lock = false;

    constructor(private el: ElementRef, private viewportScroller: ViewportScroller) { } //, private renderer: Renderer2, private viewportScroller: ViewportScroller) {}

    @HostListener('scroll') onScrool() {
        this.getYPosition();
    }

    getYPosition() {
        let newPosY, posX, posY, topPos;
        [posX, newPosY] = this.viewportScroller.getScrollPosition();
        posY = newPosY;
        if (newPosY <= this.minY) {
          topPos = (0 - newPosY) + "px";
        } else {
          topPos = "-" + this.minY + "px"
        }
        console.log("position fired " + newPosY);
        this.el.nativeElement.style.top = topPos;
      }
    
}