import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-parent',
  template: `<p>Two-way components binding. We send start value to from parent to child and and listen changes of children in parent. See console.log()</p>
            <app-child [(childData)]="parentData" (childDataChange)="anyEventWhichWillHappeningForEackChildDataChange()"></app-child>
            <hr>`
})
export class ParentComponent {
  
  parentData: string = 'start value'
  
  anyEventWhichWillHappeningForEackChildDataChange() {
    console.log(this.parentData);
  }
}
