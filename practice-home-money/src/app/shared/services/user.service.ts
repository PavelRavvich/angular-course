import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {User} from '../model/user.model';
import {Injectable} from '@angular/core';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}

  getUserByEmail(email: string): Observable<User> {
    return this.http.get(`http://localhost:3000/users?email=${email}`)
      .map((data: User[]) => {
        return data.length > 0 ? data[0] : undefined;
      });
  }
}
