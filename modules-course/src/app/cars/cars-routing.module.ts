import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CarComponent} from './car/car.component';
import {CarsComponent} from './cars.component';

const carsRoutes: Routes = [
  {
    path: '', component: CarsComponent, children: [
      {path: ':id/:name', component: CarComponent}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(carsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CarsRoutingModule {
}
