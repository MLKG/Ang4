import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SettingsComponent } from './settings.component';
import { ProfileSettingsComponent } from './profile/profile.component';
import { PasswordSettingsComponent } from './password/password.component';

export const ROUTES: Routes = [
  {
    path: '',
    component: SettingsComponent,
    children: [
      { path: 'profile', component: ProfileSettingsComponent },
      { path: 'password', component: PasswordSettingsComponent }
    ]
  }
];
@NgModule({
  declarations: [
    SettingsComponent,
    ProfileSettingsComponent,
    PasswordSettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES)
  ],
})
export class SettingsModule {}
