import { Observable }  from 'rxjs/Observable';
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import {Configuration} from '../configuration';
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';



@Injectable()
export class chatBotService {
  conf = new Configuration();
  serverURL;

  constructor(private http: Http)
  {
    this.serverURL = this.conf.serverURL;
  }

  getInitalData(): Observable<any> {
    return this.http.get(this.serverURL+ 'connection_test/con_test')
      .map((res: Response) =>
        res['_body']
      );
    // .catch(this.handleError);
  }

}
