import {BaseApi} from '../../../shared/core/base-api';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import {PREvent} from '../models/event.model';

@Injectable()
export class EventService extends BaseApi {
  constructor(public http: HttpClient) {
    super(http);
  }

  addEvent(event: PREvent): Observable<PREvent> {
    return this.post('events', event);
  }

  getEvents(): Observable<PREvent[]> {
    return this.get('events');
  }
}
