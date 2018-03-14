import { Component, OnInit } from '@angular/core';
import {CarService} from './car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
  providers: [CarService]
})
export class CarComponent implements OnInit {

  constructor(private carService: CarService) {}

  isCarVisible: boolean;
  title = 'My car header';
  carName: string;

  ngOnInit() {
    this.isCarVisible = this.carService.getVisibility();
    this.carService.getCarName()
      .subscribe(carName => this.carName = carName);
  }

}
