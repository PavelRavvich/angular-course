import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'pr-history-filter',
  templateUrl: './history-filter.component.html',
  styleUrls: ['./history-filter.component.scss']
})
export class HistoryFilterComponent {

  @Output() onFilterCancel = new EventEmitter<any>();
  @Output() onFilterApply = new EventEmitter<any>();

  @Input() categories = [];

  selectedPeriod = 'd';
  selectedTypes = [];
  selectedCategories = [];

  timePeriods = [
    {type: 'd', label: 'День' },
    {type: 'w', label: 'Неделя' },
    {type: 'M', label: 'Месяц' },
  ];

  types = [
    {type: 'income', label: 'Доход'},
    {type: 'outcome', label: 'Расход'}
  ];

  closeFilter() {
    this.selectedTypes = [];
    this.selectedCategories = [];
    this.timePeriods = [];
    this.onFilterCancel.emit();
  }

  handleChangeType(target) {
    if (target.target.checked && this.selectedTypes.indexOf(target.target.value) === -1) {
      this.selectedTypes.push(target.target.value);
    } else {
      this.selectedTypes = this.selectedTypes.filter(type => type !== target.target.value);
    }
  }

  handleChangeCategory(target) {
    if (target.target.checked && this.selectedCategories.indexOf(target.target.value) === -1) {
      this.selectedCategories.push(target.target.value);
    } else {
      this.selectedCategories = this.selectedCategories.filter(type => type !== target.target.value);
    }
  }

  applyFilter() {
    this.onFilterApply.emit({
      types: this.selectedTypes,
      categories: this.selectedCategories,
      period: this.selectedPeriod,
    });
  }
}
