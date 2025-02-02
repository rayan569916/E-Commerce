// import { Directive, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

// @Directive({
//   selector: '[appAutoScroll]'
// })
// export class AutoScrollDirective implements AfterViewInit, OnDestroy {
//   private scrollInterval!: any;
//   private scrollDistance = 1; // Pixels per scroll step
//   private scrollSpeed = 20; // Milliseconds per step

//   constructor(private el: ElementRef) {}

//   ngAfterViewInit() {
//     this.startScrolling();
//   }

//   private startScrolling() {
//     const container = this.el.nativeElement;

//     this.scrollInterval = setInterval(() => {
//       if (container.scrollLeft + container.clientWidth < container.scrollWidth) {
//         container.scrollLeft += this.scrollDistance;
//       } else {
//         container.scrollLeft = 0; // Reset scroll when end is reached
//       }
//     }, this.scrollSpeed);
//   }

//   ngOnDestroy() {
//     if (this.scrollInterval) {
//       clearInterval(this.scrollInterval);
//     }
//   }
// }



import { Directive, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appAutoScroll]'
})
export class AutoScrollDirective implements AfterViewInit, OnDestroy {
  private scrollInterval!: any;
  private switchInterval = 1750;
  private currentIndex = 0;  // Track the current index of images
  private container: any;
  private items: any;

  constructor(private el: ElementRef) {}

  ngAfterViewInit() {
    this.container = this.el.nativeElement;
    this.items = this.container.children;
    this.startSwitching();
  }

  private startSwitching() {
    this.scrollInterval = setInterval(() => {
      this.showImage(this.currentIndex);
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    }, this.switchInterval);
  }

  // Show image based on the current index
  private showImage(index: number) {
    Array.from(this.items).forEach((item: any) => {
      item.style.display = 'none';
    });
    this.items[index].style.display = 'block';
  }

  // Move left (previous image)
  public moveLeft() {
    this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    this.showImage(this.currentIndex);
  }

  // Move right (next image)
  public moveRight() {
    this.currentIndex = (this.currentIndex + 1) % this.items.length;
    this.showImage(this.currentIndex);
  }

  ngOnDestroy() {
    if (this.scrollInterval) {
      clearInterval(this.scrollInterval);
    }
  }
}


