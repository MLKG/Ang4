import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './user.component';
import { MembersComponent } from './members.component';
import { MemberService } from './member.service';
import { MailService } from './mail.service';
import { SimpleComponent } from './simple/simple.component';

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
  providers: [MemberService, MailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
