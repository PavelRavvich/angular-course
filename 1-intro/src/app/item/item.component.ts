import { Component} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  private name = 'some name';
  private year = 'some year';

  getName(): string {
    return this.name;
  }

  getYear(): string {
    return this.year;
  }
}
