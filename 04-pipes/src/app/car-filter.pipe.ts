import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'carFilter'
})
export class CarFilterPipe implements PipeTransform {

  transform(carList, search: string) {
    if (carList.length === 0 || search === '') {
      return carList;
    }

    console.log(search);
    console.log(carList);
    return carList.filter(car => car.name.toLowerCase().indexOf(search.toLowerCase()) !== -1);
  }

}
