import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent {

  itemName = '';

  addItemStatus = false;

  items = ['item_1', 'item_2', 'item_3'];

  items_2 = [{id: 234, name: 'some_1'}, {id: 23, name: 'some_2'}, {id: 124, name: 'some_3'}];

  dates = [
    new Date(2015, 3 , 5),
    new Date(2015, 1 , 2),
    new Date(2015, 5 , 8),
  ];

  addItem() {
    this.addItemStatus = true;
    this.items.push(this.itemName);
    this.itemName = '';
  }

  setBigItemText(index) {
    return index % 2 === 0;
  }
}
