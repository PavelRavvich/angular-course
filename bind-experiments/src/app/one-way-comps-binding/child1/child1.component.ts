import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child1',
  template: `<p>Listening changes of children in parent. See console.log()</p>
            <input type="text" ngModel (ngModelChange)="onChildDataChange($event)">`
})
export class Child1Component {

  @Output() childDataChange: EventEmitter<string> = new EventEmitter<string>();

  onChildDataChange(data: string) {
    this.childDataChange.emit(data);
  }
}
