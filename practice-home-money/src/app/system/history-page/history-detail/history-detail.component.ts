import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {EventService} from '../../shared/services/event.service';
import {CategoriesService} from '../../shared/services/categories.service';
import {PREvent} from '../../shared/models/event.model';
import {Category} from '../../shared/models/category.model';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'pr-history-detail',
  templateUrl: './history-detail.component.html',
  styleUrls: ['./history-detail.component.scss']
})
export class HistoryDetailComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  isLoaded = false;

  event: PREvent;
  category: Category;

  constructor(private rote: ActivatedRoute,
              private eventService: EventService,
              private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.rote.params
      .mergeMap((params: Params) => this.eventService.getEventById(params['id']))
      .mergeMap((event: PREvent) => {
        this.event = event;
        return this.categoriesService.getCategoryById(this.event.category);
      })
      .subscribe((category: Category) => {
        this.category = category;
        this.isLoaded = true;
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
