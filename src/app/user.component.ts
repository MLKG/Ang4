import { Component } from '@angular/core';

interface Address {
  province: string;
  city: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})

export class UserComponent {
  name: string;
  address: Address;
  showSkills: boolean;
  skills: string[];
  constructor() {
    this.name = 'Semlinker';
    this.address = {
      province: '福建',
      city: '厦门'
    };
    this.showSkills = true;
    this.skills = [
      'AngularJS 1.X',
      'AngularJS 2.X',
      'AngularJS 3.X',
      'AngularJS 4.X'
    ];
  }
  toggleSkills() {
    this.showSkills = !this.showSkills;
  }
  addSkill(skill: string) {
    const skillStr = skill.trim();
    console.log(skillStr);
    if (this.skills.indexOf(skillStr) === -1) {
      this.skills.push(skillStr);
    }
  }
}

