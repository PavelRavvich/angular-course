import {Component, OnInit} from '@angular/core';
import {CarsService} from './cars.service';

interface Car {
  name: string;
  color: string;
  id: number;
}

interface CarsPage {
  appTitle: any;
  carName: string;
  carColor: string;
  colors: string[];
  cars: Car[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, CarsPage {
  appTitle: any;
  carName: string;
  carColor: string;
  colors: string[];
  cars: Car[];

  ngOnInit() {
    this.colors = ['green', 'blue', 'red', 'yellow', 'orange'];
    this.appTitle = this.carsService.getAppTitle();
  }

  constructor(private carsService: CarsService) {
  }

  loadCars() {
    this.carsService
      .getCars()
      .subscribe((cars: Car[]) => {
        this.cars = cars;
      }, (error) => {
        alert(error);
      });
  }

  addCar() {
    this.carsService
      .addCar(this.carName, this.carColor)
      .subscribe((car: Car) => {
        this.cars.push(car);
      }, (error) => {
        alert(error);
      });
    this.carColor = '';
    this.carName = '';
  }

  getRandColor() {
    const num = Math.round(Math.random() * (this.colors.length - 1));
    return this.colors[num];
  }

  setNewColor(car: Car) {
    this.carsService.changeColor(car, this.getRandColor())
      .subscribe((data) => {
        console.log(data);
      });
  }

  deleteCar(car: Car) {
    this.carsService.deleteCar(car).subscribe((data) => {
      this.cars = this.cars.filter((c) => c.id !== car.id);
    });
  }
}
