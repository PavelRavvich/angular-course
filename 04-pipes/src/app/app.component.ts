import {Component} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  template: `
    <div class="col-xs-8 col-xs-offset-2">
      <h2>{{ name }}</h2>
      <h2>{{ name | lowercase}}</h2>
      <h2>{{ name | uppercase}}</h2>
      <h2>{{ name | slice:0:5}}</h2><!-- Get substring from 0 to 5 -->
      <h2>{{ name | slice:0:5 | uppercase}}</h2>
      <hr>
      <h2>{{ pi }}</h2>
      <h2>{{ pi | number}}</h2><!-- Rounding to 3 symbol after dot -->
      <h2>{{ pi | number:'1.3-4' }}</h2><!-- pattern before dot.range after dot -->
      <hr>
      <h2>{{money | currency:'USD' }}</h2><!-- Money converter -->
      <hr>
      <h2>{{ date | date }}</h2><!-- Mar 6, 2018 -->
      <h2>{{ date | date:'fullDate' }}</h2><!-- Tuesday, March 6, 2018 -->
      <h2>{{ date | date:'shortDate' }}</h2><!-- 3/6/18 -->
      <hr>
      <h2>{{ amount | percent}}</h2>
      <hr>
      <h2>{{ object }}</h2>
      <h2>
        <pre>{{ object | json}}</pre>
      </h2>
      <h2>Custom pipe</h2>
      <h2>{{ num | appPow:3 }}</h2>
    </div>
    <div>
      <h2>{{acyncTitle | async}}</h2>
      <h2>Pipe filter</h2>
      <input type="text" class="form-control" [(ngModel)]="searchCar">
      <hr>
      <!-- ВНИМАНИЕ! массив carList становится первым параметром автоматически! -->
      <li class="list-group" *ngFor="let car of carList | carFilter:searchCar;">
        <ul class="list-group-item">
          {{car.name}}
        </ul>
      </li>
    </div>
  `
})
export class AppComponent {
  acyncTitle = Observable.of('Async title').delay(3000);
  searchCar = '';
  carList = [{
    name: 'Mazda'
  }, {
    name: 'Ford'
  }, {
    name: 'BMW'
  }, {
    name: 'Tesla'
  }];

  num = 2;
  name = 'Java Vision';
  pi = Math.PI;
  money = 350;
  date = new Date();
  amount = 0.45;
  object = {
    foo: 'foo',
    bar: 'bar',
    nested: {
      x: 1,
      arr: [1, 2, 3]
    }
  };
}
