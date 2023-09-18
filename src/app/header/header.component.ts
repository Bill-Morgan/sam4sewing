import { ViewportScroller } from '@angular/common';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  listener;
  topPos = "0px";
  posX = 0;
  posY = 0;

  constructor(private renderer: Renderer2, private viewportScroller: ViewportScroller) { }

  ngOnInit(): void {
    this.listener = this.renderer.listen('window', 'scroll', (e) => {
      this.getYPosition();
    });
  }

  getYPosition() {
    const MIN_Y = 200;
    let newPosY;
    [this.posX, newPosY] = this.viewportScroller.getScrollPosition();
    this.posY = newPosY;
    if (newPosY <= MIN_Y) {
      this.topPos = (0 - newPosY) + "px";
    } else {
      this.topPos = "-" + MIN_Y + "px"
    }
  }

}
