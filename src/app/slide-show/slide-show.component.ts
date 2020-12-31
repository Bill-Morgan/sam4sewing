import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit, OnDestroy {
  @Input() images;
  @Input() filePath;
  isRunning = true;
  subscription;
  index = 0;
  curImage;

  constructor() { }

  ngOnInit(): void {
    this.curImage = (this.filePath + this.images[this.index]);
    this.subscription = interval(4000).subscribe(() => {
      this.onIncerment(1);
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onIncerment(amount: number) {
    this.index += amount;
    if (this.index >= this.images.length) {
      this.index = 0;
    }
    if (this.index < 0) {
      this.index = this.images.length -1;
    }
    this.curImage = (this.filePath + this.images[this.index]);
  }

  onStartStop() {
    if (this.isRunning) {
      this.subscription.unsubscribe();
    } else {
      this.subscription = interval(4000).subscribe(() => {
        this.onIncerment(1);
      })  
    }
    this.isRunning = !this.isRunning;
  }
}
