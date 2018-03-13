import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CarComponent} from './car/car.component';
import {CarsComponent} from './cars.component';
import {CarsService} from '../cars.service';
import {CarsRoutingModule} from './cars-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [
    CarsComponent,
    CarComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    SharedModule
  ],
  providers: [CarsService]
})
export class CarsModule {}
