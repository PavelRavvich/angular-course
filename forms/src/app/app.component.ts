import {Component, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  defaultAnswer = 'no';
  defaultCountry = 'ru';


  formData = {};
  isSubmitted = false;

  submitForm() {
    this.isSubmitted = true;
    this.formData = this.form.value;
    this.form.reset();
    console.log(this.form);
  }

  @ViewChild('form') form: NgForm;

  addRandEmail() {
    const randEmail = 'wfm@gmail.com';
    this.form.form.patchValue({
      user: {email: randEmail}
    });
  }

}
