import { Component, Inject } from '@angular/core';
import { MailService } from './mail.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  onUpdate (id, text) {
    this.mailService.update(id, text);
  }
  constructor(
    // @Inject(MailService) private mailService,
    private mailService: MailService,
    @Inject('apiUrl') private apiUrl
  ) {}
}
