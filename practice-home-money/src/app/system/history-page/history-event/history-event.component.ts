import {Component, Input, OnInit} from '@angular/core';
import {PREvent} from '../../shared/models/event.model';
import {Category} from '../../shared/models/category.model';

@Component({
  selector: 'pr-history-event',
  templateUrl: './history-event.component.html',
  styleUrls: ['./history-event.component.scss']
})
export class HistoryEventComponent implements OnInit {

  @Input() categories: Category[] = [];
  @Input() events: PREvent[] = [];

  searchValue = '';
  searchPlaceholder = 'Сумма';
  searchField = 'amount';

  constructor() { }

  ngOnInit() {
    this.events.forEach((e) => {
      e.categoryName = this.categories.find(c => c.id === e.category).name;
    });
  }

  getEventClass(e: PREvent) {
    return {
      'label': true,
      'label-danger': e.type === 'outcome',
      'label-success': e.type === 'income'
    };
  }

  changeCriteria(field: string) {
    const namesMap = {
      amount: 'Сумма',
      date: 'Дата',
      category: 'Категория',
      type: 'Тип'
    };
    this.searchPlaceholder = namesMap[field];
    this.searchField = field;
  }
}
