import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { CarsComponent } from './cars/cars.component';
import {FormsModule} from '@angular/forms';
import { AddcarComponent } from './addcar/addcar.component';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarsComponent,
    AddcarComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
