import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './two-way-comps-binding-with-listening-data-in-parent/parent/parent.component';
import { ChildComponent } from './two-way-comps-binding-with-listening-data-in-parent/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent,
    
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
