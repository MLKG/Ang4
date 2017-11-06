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
  }
}
