import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {NgForm} from '@angular/forms';
import * as moment from 'moment';

import {Category} from '../../shared/models/category.model';
import {EventService} from '../../shared/services/event.service';
import {BillService} from '../../shared/services/bill.service';
import {Massage} from '../../../shared/model/massage.model';
import {PREvent} from '../../shared/models/event.model';
import {Bill} from '../../shared/models/bill.model';

@Component({
  selector: 'pr-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit, OnDestroy {

  subscription1: Subscription;
  subscription2: Subscription;

  @Input() categories: Category[] = [];

  types = [
    {type: 'income', label: 'Доход'},
    {type: 'outcome', label: 'Расход'}
  ];

  massage: Massage;

  constructor(private eventService: EventService, private billService: BillService) {
  }

  ngOnInit() {
    this.massage = new Massage('danger', '');
  }

  private showMassage(text: string) {
    this.massage.text = text;
    window.setTimeout(() => {
      this.massage.text = '';
    }, 5000);
  }

  onSubmit(form: NgForm) {
    const {amount, description, category, type} = form.value;
    const event = new PREvent(type, amount, +category, moment().format('DD.MM.YYYY HH:mm:ss'), description);

    this.subscription1 = this.billService.getBill()
      .subscribe((bill: Bill) => {
        let billState = 0;
        if (type === 'outcome') {
          if (amount > bill.value) {
            this.showMassage(`На счету не достаточно средств. Вам не хватает ${amount - bill.value}`);
            return;
          } else {
            billState = bill.value - amount;
          }
        } else {
          billState = bill.value + amount;
        }

        this.subscription2 = this.billService.updateBill({value: billState, currency: bill.currency})
          .mergeMap(() => this.eventService.addEvent(event))
          .subscribe(() => {
            form.setValue({
              amount: 0,
              description: ' ',
              category: 1,
              type: 'outcome'
            });
          });
      });
  }

  ngOnDestroy() {
    if (this.subscription1) {
     this.subscription1.unsubscribe();
    }
    if (this.subscription2) {
      this.subscription2.unsubscribe();
    }
  }
}
