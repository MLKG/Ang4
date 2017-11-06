import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// component
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { MembersComponent } from './members.component';
import { SimpleComponent } from './simple/simple.component';

// service
import { MemberService } from './member.service';
import { MailService } from './mail.service';

// directive
import { GreetDirective} from './greet.directive';
import { UnlessDirective} from './unless.directive';
import { FormsComponent } from './forms/forms.component';

export const ROUTES: Routes = [
  { path: '', component: UserComponent },
  { path: 'user/:username', component: UserComponent },
  { path: 'members', component: MembersComponent },
  {
    path: 'settings',
    loadChildren: './settings/settings.module#SettingsModule'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    MembersComponent,
    SimpleComponent,
    GreetDirective,
    UnlessDirective,
    FormsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    // CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [MemberService, MailService, {provide: 'apiUrl', useValue: 'https://jsonplaceholder.typicode.com/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
