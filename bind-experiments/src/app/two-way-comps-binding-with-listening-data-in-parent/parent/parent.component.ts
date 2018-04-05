import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<app-child [(childData)]="parentData" (childDataChange)="anyEventWhichWillHappeningForEackChildDataChange()"></app-child>`
})
export class ParentComponent {

  parentData: string = 'start value'
  
  anyEventWhichWillHappeningForEackChildDataChange() {
    console.log(this.parentData);
  }
}
