import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './two-way-comps-binding-with-listening-data-in-parent/parent/parent.component';
import { ChildComponent } from './two-way-comps-binding-with-listening-data-in-parent/child/child.component';
import { Child1Component } from './one-way-comps-binding/child1/child1.component';
import { Parent1Component } from './one-way-comps-binding/parent1/parent1.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    Child1Component,
    Parent1Component,
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
