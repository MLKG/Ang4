import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { HttpRequest } from "@angular/common/http";
import { HttpEvent, HttpHandler, HttpInterceptor } from "@angular/common/http";
import { environment } from '../environments/environment';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MemberService {
  constructor(private http: Http) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const clonedRequest = req.clone({
      headers: req.headers.set('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8')
    });
    return next.handle(clonedRequest);
  }
  getMembers() {
    return this.http
      .get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`)
      .map(res => res.json());
  }
  fetch(): Promise<any> {
    return this.http.post(environment.httpUrl + 'home/wechat', '').toPromise()
      .then((res) => {
        const body = res.json();
        console.table(body.data);
        return Promise.resolve(body.data);
      })
      .catch((err) => {
        console.log(err);
        Promise.reject(err);
      });
  }
}
