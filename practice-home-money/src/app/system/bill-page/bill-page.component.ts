import {Component, OnDestroy, OnInit} from '@angular/core';
import {BillService} from '../shared/services/bill.service';
import {Observable} from 'rxjs/Observable';
import {Bill} from '../shared/models/bill.model';
import {Subscription} from 'rxjs/Subscription';
import {delay} from 'q';

@Component({
  selector: 'pr-bill-page',
  templateUrl: './bill-page.component.html',
  styleUrls: ['./bill-page.component.scss']
})
export class BillPageComponent implements OnInit, OnDestroy {

  subscription1: Subscription;
  subscription2: Subscription;
  currency: any;
  bill: Bill;
  isLoaded = false;

  constructor(private billService: BillService) {
  }

  ngOnInit() {
    this.subscription1 = Observable.combineLatest(
      this.billService.getBill(),
      this.billService.getCurrency()
    ).subscribe((data: [Bill, any]) => {
      this.bill = data[0];
      this.currency = data[1];
      this.isLoaded = true;
      console.log(data);
    });
  }

  onRefresh() {
    this.isLoaded = false;
    this.subscription2 = this.billService.getCurrency()
      .subscribe((currency: any) => {
        this.currency = currency;
      });
    this.isLoaded = true;
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe();
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
  }
}
