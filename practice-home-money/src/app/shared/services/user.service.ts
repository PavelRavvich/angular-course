import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

import {User} from '../model/user.model';
import {BaseApi} from '../core/base-api';

@Injectable()
export class UserService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.get(`users?email=${email}`).map((data: User[]) => {
      return data.length > 0 ? data[0] : undefined;
    });
  }

  createNewUser(user: User): Observable<User> {
    return this.post('users', user).map((data: User) => data);
  }
}
