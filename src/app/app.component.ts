import { Component, Inject, OnInit } from "@angular/core";
import { MailService } from './mail.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  title = 'app';
  context = {
    message: 'Hello, ngOutletContext!',
    $implicit: 'Hello, Girls!'
  };
  condition: boolean;
  onUpdate (id, text) {
    this.mailService.update(id, text);
  }
  constructor(
    // @Inject(MailService) private mailService,
    private mailService: MailService,
    @Inject('apiUrl') private apiUrl,
    private router: Router
  ) {
    this.condition = true;
  }
  ngOnInit() {
    console.log(this.router);
    // setTimeout(() => {
    //   this.router.navigate(['/settings/password']);
    // }, 5000);
  }
}
