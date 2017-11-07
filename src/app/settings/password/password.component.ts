import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-settings-password',
  template: `
    <p>
      密码
    </p>
    <div class="display-box">
      <div>666</div>
    </div>
  `,
  styleUrls: [`../settings.component.less`]
})
export class PasswordSettingsComponent implements OnInit {
  ngOnInit() {
  }
}
