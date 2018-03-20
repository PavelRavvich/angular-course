import {ActivatedRoute, Params, Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

import {UserService} from '../../shared/services/user.service';
import {User} from '../../shared/model/user.model';
import {Massage} from '../../shared/model/massage.model';
import {AuthService} from '../../shared/services/auth.service';

@Component({
  selector: 'pr-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  massage: Massage;

  constructor(
    private userService: UserService,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.massage = new Massage('danger', '');
    this.route.queryParams.subscribe((params: Params) => {
      if (params['nowCanLogin']) {
        this.showMassage({
          text: 'Теперь вы можете зайти в систему',
          type: 'success'
        });
      }
    });
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
          window.localStorage.setItem('user', JSON.stringify(user));
          this.authService.login();
          this.massage.text = '';
          this.router.navigate(['/system', 'bill']);
          console.log('yes');
        } else {
          this.showMassage({
            text: 'Такого пользователя нет.',
            type: 'danger'
          });
        }
        console.log(user);
      });
  }

  private showMassage(massage: Massage) {
    this.massage = massage;
    window.setTimeout(() => {
      this.massage.text = '';
    }, 5000);
  }
}
