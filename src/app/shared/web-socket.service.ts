import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WebSocketService {
  ws: WebSocket;
  constructor() { }
  createObservableSocket(url: string, id: number): Observable<any> {
    this.ws = new WebSocket(url);
    return new Observable<string>(observer => {
        this.ws.onmessage = (event) => observer.next(event.data);
        this.ws.onerror = (event) => observer.error(event);
        this.ws.onclose = (event) => observer.complete();
        this.ws.onopen = (event) => this.sendMessage({productId: id});
        return () => {
          this.ws.close();  // 在取消订阅的时候会调用次回调函数
        };
      }
    ).map(message => JSON.parse(message));
  }
  sendMessage(message: any) {
    this.ws.send(JSON.stringify(message));
  }

}
