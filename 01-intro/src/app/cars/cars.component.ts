import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  canAddCars = false;

  addCarStatus = '';

  inputText = '';

  twoWayBinding= 'Default';

  constructor() {
    setTimeout(() => {
      this.canAddCars = true;
    }, 4000);
  }

  addCar() {
    if (this.addCarStatus === '') {
      this.addCarStatus = 'Машина добавлена';
    } else {
      this.addCarStatus = '';
    }
  }

  changeInputText(event) {
    this.inputText = event.target.value;
  }

  changeInputText2(value) {
    this.inputText = value;
  }

  changeTwoWayBindingText(event) {
    this.twoWayBinding = event.target.value;
  }
}
