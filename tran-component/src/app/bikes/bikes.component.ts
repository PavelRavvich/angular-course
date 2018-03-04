import {Component} from '@angular/core';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent {
  name = '';
  year = 2017;

  bikes: [{ name: string, year: number }] = [{
    name: 'bike_1',
    year: 2011
  }, {
    name: 'bike_2',
    year: 2000
  }];

  constructor() {
  }

  addBike() {
    this.bikes.push({
      name: this.name,
      year: this.year
    });
    this.name = '';
    this.year = 2015;
  }
}
