import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';
import * as moment from 'moment';

import {CategoriesService} from '../shared/services/categories.service';
import {EventService} from '../shared/services/event.service';
import {Category} from '../shared/models/category.model';
import {PREvent} from '../shared/models/event.model';

@Component({
  selector: 'pr-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss']
})
export class HistoryPageComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  isLoaded = false;
  categories: Category[] = [];
  events: PREvent[] = [];
  filteredEvents: PREvent[] = [];

  chartData = [];

  isFilterVisible = false;

  constructor(private categoryService: CategoriesService, private eventService: EventService) {}

  ngOnInit() {
    this.subscription = Observable.combineLatest(
      this.categoryService.getCategories(),
      this.eventService.getEvents()
    ).subscribe((data: [Category[], PREvent[]]) => {
      this.categories = data[0];
      this.events = data[1];
      this.calcChartData();
      this.setOriginalEvents();
      this.isLoaded = true;
    });
  }

  calcChartData(): void {
    this.chartData = [];
    this.categories.forEach((category) => {
      const catEvents = this.filteredEvents.filter((event) => event.category === category.id && event.type === 'outcome');
      this.chartData.push({
        name: category.name,
        value: catEvents.reduce((total, e) => {
          total += e.amount;
          return total;
        }, 0)
      });
    });
  }

  openFilter() {
    this.toggleFilterVisibility(true);
  }

  private toggleFilterVisibility(isFilterVisible: boolean) {
    this.isFilterVisible = isFilterVisible;
  }

  onFilterApply(filterData) {
    this.isFilterVisible = false;
    this.setOriginalEvents();

    const startPeriod = moment().startOf(filterData.period).startOf('d');
    const endPeriod = moment().endOf(filterData.period).endOf('d');

    this.filteredEvents = this.filteredEvents
      .filter((event) => {
        return filterData.types.indexOf(event.type) !== -1;
      })
      .filter((event) => {
        return filterData.categories.indexOf(event.category.toString()) !== -1;
      })
      .filter((event) => {
        const momentDate = moment(event.date, 'DD.MM.YYYY HH:mm:ss');
        return momentDate.isBetween(startPeriod, endPeriod);
      });
    this.calcChartData();
  }

  onFilterCancel() {
    this.toggleFilterVisibility(false);
    this.setOriginalEvents();
    this.calcChartData();
  }

  private setOriginalEvents() {
    this.filteredEvents = this.events.slice();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
