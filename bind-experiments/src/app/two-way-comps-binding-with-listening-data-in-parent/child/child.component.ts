import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<input [(ngModel)]="childData" type="text" (ngModelChange)="onChildDataChange($event)">`
})
export class ChildComponent {

  @Input() childData: string;

  @Output() childDataChange: EventEmitter<string> = new EventEmitter<string>();

  /**
   * Vars childData and childDataChange related.
   * 
   * It appears to be a convention in Angular that when an Output property has the same name as an Input property,
   * with the addition of the Change suffix, the property can be used for two-way binding.
   */
  onChildDataChange(data: string) {
    this.childDataChange.emit(this.childData);
  }

}
