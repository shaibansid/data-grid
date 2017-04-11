import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AppService {
  private dataUrl:string = './assets/mock.json';

  constructor(private http: Http) {

  }


  getData(): Observable<any> {
    return this.http.get(this.dataUrl)
      .map(res => res.json())
      .catch(this.handler);
  }

  private handler(error:Response): Observable<any>{
    console.error(error);
    return Observable.throw(error);
  }
}
