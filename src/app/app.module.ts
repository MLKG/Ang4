import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { MembersComponent } from './members.component';
import { SimpleComponent } from './simple/simple.component';
import { MemberService } from './member.service';
import { MailService } from './mail.service';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'user' },
  { path: 'user', component: UserComponent },
  { path: 'members', component: MembersComponent }
];

@NgModule({
  declarations: [
    AppComponent, UserComponent, MembersComponent, SimpleComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(ROUTES)
  ],
  providers: [MemberService, MailService, {provide: 'apiUrl', useValue: 'https://jsonplaceholder.typicode.com/'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
