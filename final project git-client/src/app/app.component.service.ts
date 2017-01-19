import { Observable }  from 'rxjs/Observable';
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';
import {Configuration} from './configuration';


@Injectable()
export class StagePageService {
  conf = new Configuration();
  serverURL;

  constructor(private http: Http) {
    this.serverURL = this.conf.serverURL;
  }


  getTryConnection(): Observable<any> {
    return this.http.get(this.serverURL+ 'connection_test/con_test')
      .map((res: Response) => res['_body']);
    // .catch(this.handleError);
  }

}
