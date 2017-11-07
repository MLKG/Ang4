import {Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";

interface Person {
  readonly username: string;
  age?: number;
}
class Greeter {
  static cname: string = 'DALIN';
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  static getClassName() {
    return 'Class name is Greeter';
  }
  greet() {
    return 'Hello ' + this.greeting;
  }
}
const passcode = 'Dalin love Hui';
class Employee {
  private _fullName: string;
  get fullName(): string {
    return this._fullName;
  }
  set fullName(newName: string) {
    if (passcode && passcode === 'Dalin love Hui') {
      this._fullName = newName;
    } else {
      console.log("Error: Unauthorized update of employee!");
    }
  }
}
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("Slithering...");
    super.move(distanceInMeters);
  }
}
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
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
  myName: string;
  constructor() {
    this.myName = 'ZGL';
    // setTimeout(() => {
    //   this.myName = 'ZGL';
    // }, 1000);
  }
  ngOnInit() {
    type Message = string | string[];
    const greet = (message: Message) => {
      if (message instanceof Array) {
        let messages = '';
        message.forEach((msg) => {
          messages += `${msg}`;
        });
        console.log(messages);
      } else {
        console.log('Received messages = ', message);
      }
    };
    greet('semlinker');
    greet(['Hello', 'Angular']);
    let InGenerator: (chars: string, nums: number) => string;
    function  createUserId(name: string, id: number): string {
      return name + id;
    }
    InGenerator = createUserId;
    const user = InGenerator('Dalin', 1);
    console.log(user);
    function push(array, ...items) {
      console.log(items);
      items.forEach(item => {
        array.push(item);
      });
    }
    const a = [];
    push(a, 1, 2, 3);
    console.log(a);
    let x: number;
    let y: number;
    let z: number;
    const five_array = [0, 1, 2, 3, 4];
    [x, y, z] = five_array;
    console.log([x, y, z]);
    const person = {
      name1: 'dalin',
      gender: 'male'
    };
    const personWithAge = { ...person, age: 26 };
    const { name1, ...rest } = personWithAge;
    console.log(name1);
    console.log(rest);
    const person1 = [
      {a: 1},
      {b: 2},
      {c: 3}
    ];
    const person1WithAge = [...person1, {d: 4}];
    console.log(person1WithAge);
    const Dalin: Person = {
      username: 'Dalin'
    };
    console.log(Dalin.age);
    Dalin.age = 30;
    console.table(Dalin);
    console.log(this.myName);
    // setTimeout(() => {
    //   console.log(this.myName);
    // }, 1000);
    const greeter = new Greeter('world');
    console.log(greeter.greet()); // 成员方法需要实例化
    console.log(Greeter.cname);   // 静态属性直接取值
    console.log(Greeter.getClassName()); // 静态方法直接取值
    const employee = new Employee();
    employee.fullName = 'Bob smith';
    if (employee.fullName) {
      console.log(employee.fullName);
    }
    const sam = new Snake('Sammy the Python');
    console.log(sam);
    sam.move();
    const myGenericNumber = new GenericNumber<number>();
    myGenericNumber.zeroValue = 0;
    myGenericNumber.add = function (x, y) {
      return x + y;
    };
    console.log(myGenericNumber.add(5, 6));
  }
}
