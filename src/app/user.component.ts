import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';

interface Address {
  province: string;
  city: string;
}

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})

export class UserComponent implements OnInit {
  name: string;
  username: string;
  address: Address;
  showSkills: boolean;
  skills: string[];
  constructor(private route: ActivatedRoute) {
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
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.username = params.username;
    });
  }
}

