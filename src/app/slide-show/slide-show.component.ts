import { Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements OnInit, OnDestroy {
  @ViewChild("curImg", {static: true}) curImg;
  @Input() images;
  @Input() filePath;
  @Input() startIndex;
  fullSize = false;
  isRunning = true;
  subscription;
  index;
  curImage;

  constructor() { }

  ngOnInit(): void {
    if (this.startIndex != null) {
      this.index = +this.startIndex - 1;
    } else {
      this.index = 0;
    }
    this.curImage = (this.filePath + this.images[this.index]);
    this.subscription = interval(3000).subscribe(() => {
      this.onIncerment(1);
    })
  }

  onToggleFullSize() {
    if (this.fullSize) {
      this.fullSize = false;
      this.onIncerment(1);
      this.onStartStop();
    } else {
      if (this.isRunning) {
        this.onStartStop();
      }
      this.fullSize = true;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onInputFocus() {
    this.subscription.unsubscribe();
  }

  onInputBlur() {
    this.index = 1;
    this.curImage = (this.filePath + this.images[this.index]);
  }

  onIncerment(amount: number) {
    this.index += amount;
    if (this.index >= this.images.length) {
      this.index = 0;
    }
    if (this.index < 0) {
      this.index = this.images.length - 1;
    }
    this.curImage = (this.filePath + this.images[this.index]);
  }

  onStartStop() {
    if (this.isRunning) {
      this.subscription.unsubscribe();
    } else {
      this.subscription = interval(3000).subscribe(() => {
        this.onIncerment(1);
      })
    }
    this.isRunning = !this.isRunning;
  }
}
