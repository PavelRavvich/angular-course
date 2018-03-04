import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import {FormsModule} from '@angular/forms';
import { BikeComponent } from './bike/bike.component';
import { BikesComponent } from './bikes/bikes.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarsComponent,
    BikeComponent,
    BikesComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
