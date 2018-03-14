import {Injectable} from '@angular/core';

@Injectable()
export  class CarsService {
  cars = [{
    name: 'Ford',
    id: 1,
    year: 2007,
    color: 'blue'
  }, {
    name: 'Audi',
    id: 2,
    year: 2015,
    color: 'black'
  }, {
    name: 'BMW',
    id: 3,
    year: 2014,
    color: 'white'
  }, {
    name: 'Mercedes',
    id: 4,
    year: 2001,
    color: 'green'
  }];
}
