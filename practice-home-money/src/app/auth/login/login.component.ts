import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/model/user.model';
import {Massage} from '../../shared/model/massage.model';

@Component({
  selector: 'pr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  massage: Massage;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit() {
    this.massage = new Massage('danger', '');
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });
  }

  onSubmit() {
    const formData = this.form.value;
    this.userService.getUserByEmail(formData.email)
      .subscribe((user: User) => {
        if (user && user.password === formData.password) {
          console.log('yes');
        } else {
          this.showMassage('Такого пользователя не существует');
        }
        console.log(user);
      });
  }

  private showMassage(text: string, type: string = 'danger') {
    this.massage = new Massage(type, text);
    window.setTimeout(() => {
      this.massage.text = '';
    }, 5000);
  }
}
