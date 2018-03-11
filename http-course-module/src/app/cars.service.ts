import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

interface Title {
  value;
}

@Injectable()
export class CarsService {
  constructor(private http: HttpClient) {
  }

  getAppTitle() {
    return this.http.get('http://localhost:3000/title')
      .map((data: Title) => {
        console.log(data);
        return data.value;
    });
  }

  getCars() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf8'
    });
    return this.http.get('http://localhost:3000/cars', {headers: headers})
      .catch((error: Response) => {
        console.log(error);
        return Observable.throw('Сервер не доступен. Попробуйте позже.');
      });
  }

  addCar(carName: string, carColor: string) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf8'
    });
    const data = {
      name: carName,
      color: carColor
    };
    return this.http.post('http://localhost:3000/cars', data, {headers: headers})
      .catch((error: Response) => {
        console.log(error);
        return Observable.throw('Сервер не доступен. Попробуйте позже.');
      });
  }

  changeColor(car: any, color: string) {
    car.color = color;
    return this.http.put(`http://localhost:3000/cars/${car.id}`, car);
  }

  deleteCar(car: any) {
    return this.http.delete(`http://localhost:3000/cars/${car.id}`);
  }
}
