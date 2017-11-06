import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings',
  template: `
    <a routerLink="/settings/password">设置密码</a>
    <a routerLink="/settings/profile">个人信息</a>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class SettingsComponent implements OnInit {
  ngOnInit() {
    type Message = string | string[];
    const greet = (message: Message) => {
      if (message instanceof Array) {
        let messages = '';
        message.forEach((msg) => {
          messages += `${msg}`;
        });
        console.log(messages);
      } else {
        console.log('Received messages = ', message);
      }
    };
    greet('semlinker');
    greet(['Hello', 'Angular']);
  }
}
