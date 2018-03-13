import {Directive, HostBinding, OnInit} from '@angular/core';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective implements OnInit {
  @HostBinding('style.color') color = 'black';

  ngOnInit() {
    this.color = 'blue';
  }
}
