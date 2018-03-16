import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import {AuthComponent} from './auth.component';
import {AppRoutingModule} from '../app-routing.module';
import {AuthRoutingModule} from './auth-routing.module';
import {SharedModule} from '../shared/shared.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    AuthRoutingModule,
    SharedModule
  ]
})
export class AuthModule {}
