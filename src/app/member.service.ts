import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MemberService {
  constructor(private http: Http) { }
  getMembers() {
    return this.http
      .get(`https://api.github.com/orgs/angular/members?page=1&per_page=5`)
      .map(res => res.json());
  }
  getProductList() {
    return this.http.post(`http://localhost:8080/api/home/wechat`, {})
      .map(res => {
        return JSON.parse(res["_body"]);
      });
  }
}
