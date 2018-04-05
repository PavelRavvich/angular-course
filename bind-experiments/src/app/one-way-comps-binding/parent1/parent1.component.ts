import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  template: `<app-child1 (childDataChange)="log($event)"></app-child1>`
})
export class Parent1Component {
  log(event) {
    console.log(event);
  }

}
