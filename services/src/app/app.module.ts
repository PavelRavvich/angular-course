import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import { AddCarComponent } from './add-car/add-car.component';
import {FormsModule} from '@angular/forms';
import {ConsoleService} from './console.service';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    AddCarComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ConsoleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
