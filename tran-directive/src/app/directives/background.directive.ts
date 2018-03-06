import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit {
  @Input('appBackground') hoverColor = 'green';
  @Input() defaultColor = 'transparent';
  @HostBinding('style.backgroundColor') background: string;
  @HostBinding('style.color') textColor: string;

  constructor(private element: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.background = this.defaultColor;
    console.log(this.defaultColor);
  }

  @HostListener('mouseenter') mouseEnter(event: Event) {
    console.log(this.hoverColor);
    this.background = this.hoverColor;
    this.textColor = 'white';
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    console.log(this.defaultColor);
    this.background = this.defaultColor;
    this.textColor = 'black';
  }
}
