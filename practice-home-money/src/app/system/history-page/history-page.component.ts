import {Component, OnDestroy, OnInit} from '@angular/core';
import {CategoriesService} from '../shared/services/categories.service';
import {EventService} from '../shared/services/event.service';
import {Observable} from 'rxjs/Observable';
import {Category} from '../shared/models/category.model';
import {PREvent} from '../shared/models/event.model';
import {Subscription} from 'rxjs/Subscription';

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

  chartData = [];

  constructor(private categoryService: CategoriesService, private eventService: EventService) { }

  ngOnInit() {
    this.subscription = Observable.combineLatest(
      this.categoryService.getCategories(),
      this.eventService.getEvents()
    ).subscribe((data: [Category[], PREvent[]]) => {
      this.categories = data[0];
      this.events = data[1];
      this.calcChartData();
      this.isLoaded = true;
    });
  }

  calcChartData(): void {
    this.chartData = [];
    this.categories.forEach((category) => {
      const catEvents = this.events.filter((event) => event.category === category.id && event.type === 'outcome');
      this.chartData.push({
        name: category.name,
        value: catEvents.reduce((total, e) => {
          total += e.amount;
          return total;
        }, 0)
      });
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
