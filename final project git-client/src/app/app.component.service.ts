import { Observable }  from 'rxjs/Observable';
import { Injectable }     from '@angular/core';
import { URLSearchParams,Http, Response,Headers,RequestOptions  } from '@angular/http';
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


  submitYourCode(id:string,code:string): Observable<any> {
    let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8',
     'Accept': '*/*'});
         let options = new RequestOptions({ headers: headers });
    return this.http.post(this.serverURL+ 'courses/' + this.conf.currLang+'/'+ this.conf.courseName+ '/compile'
      ,{"id":id,"code":code},options).map((res: Response) => res.json());
    // .catch(this.handleError);
  }

  getInitalDataForStage(stageId:string): Observable<any> {
    //let params: URLSearchParams = new URLSearchParams();
    //params.set('id', stageId.toString());
    let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8',
     'Accept': '*/*'});
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.serverURL+ 'courses/' + this.conf.currLang+'/'+ 
    this.conf.courseName+ '/' + stageId.toString(),options)
      .map((res: Response) => res.json());
    // .catch(this.handleError);
  }

}
