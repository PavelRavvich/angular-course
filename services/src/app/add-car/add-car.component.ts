import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CarsService} from '../cars.service';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent {

  carName = '';

  warningMsg = '';

  constructor(private service: CarsService) {}

  addCar() {
    if (this.carName === '') {
      this.warningMsg = 'Поле не может быть пустым';
    } else {
      this.warningMsg = '';
      this.service.addCar(this.carName);
      this.carName = '';
    }
  }
}
