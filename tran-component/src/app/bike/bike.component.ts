import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bike',
  templateUrl: './bike.component.html',
  styleUrls: ['./bike.component.css']
})
export class BikeComponent {
  @Input() bikeItem: {name: string, year: number};
}
