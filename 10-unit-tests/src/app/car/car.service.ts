import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class CarService {
  private isVisible = true;

  showCar() {
    this.isVisible = true;
  }

  hideCar() {
    this.isVisible = false;
  }

  getVisibility() {
    return this.isVisible;
  }

  getCarName(): Observable<string> {
    return Observable.of('Ford').delay(100);
  }
}
