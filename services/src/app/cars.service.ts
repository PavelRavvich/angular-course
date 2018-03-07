import {ConsoleService} from './console.service';
import {Injectable} from '@angular/core';

@Injectable()
export class CarsService {

  constructor(private consoleService: ConsoleService) {}

  cars = [{
    name: 'Ford',
    isSold: false
  }, {
    name: 'Mazda',
    isSold: true
  }, {
    name: 'Mercedes',
    isSold: false
  }];

  addCar(name: string) {
    this.cars.push({
      name: name,
      isSold: false
    });
    this.consoleService.log(`Машина ${name} была добавлена.`);
  }
}
