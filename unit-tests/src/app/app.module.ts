import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CarComponent } from './car/car.component';
import {ColorDirective} from './colorDirective/color.directive';


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    ColorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
