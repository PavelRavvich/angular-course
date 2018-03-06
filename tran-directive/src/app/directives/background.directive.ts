import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {

  constructor(private element: ElementRef) {
  }

  ngOnInit() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
}
