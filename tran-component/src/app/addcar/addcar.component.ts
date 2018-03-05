import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent {

  carName = '';
  carYear = 2017;
  @Output('onAddCar') carEmitter = new EventEmitter<{name: string, year: number}>();

  addCar() {
    this.carEmitter.emit({
      name: this.carName,
      year: this.carYear
    });
    this.carName = '';
    this.carYear = 2017;
  }
}
