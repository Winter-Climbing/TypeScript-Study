"use strict";
// class Player {
//   // 미리 프로퍼티의 타입을 설정해줘야 한다.
//   // readonly를 통해 값 할당이 처음에만 가능하다고 설정한다.
//   // public은 기본값이며 외부 어디서든 접근할 수 있다.
//   // private는 오직 class 내부에서만 접근할 수 있다.
//   // private 대신 #score이라고 할 수도 있지만 이렇게 되면 프로퍼티 이름 자체가 바뀌는 것이다. 그리고 es2015부터 가능하다.
//   // #score은 js 구문이고, private는 ts구문이다. 따라서 #score은 런타임에서 실행되는 반면, private는 컴파일에서만 error를 발생시킨다.
//   // 일반적으로는 #score가 더 많이 쓰인다.
//   public readonly first: string;
//   public readonly last: string;
//   private score: number = 0;
//   constructor(first: string, last: string) {
//     this.first = first;
//     this.last = last;
//   }
//   private secretMethod(): void {
//     console.log("SECRET METHOD!");
//   }
// }
class Player {
    //   public readonly first: string;
    //   public readonly last: string;
    //   private score: number = 0;
    // 단축구문 - 파라미터 프로퍼티
    // 매개변수 안에 public을 집어 넣는다.
    // 키와 값이 똑같이 first, last이니 굳이 구문을 중복해서 사용할 필요가 없다.
    constructor(first, last, 
    // private는 자식 클래스에서 접근할 수 없다.
    // private _score: number
    // 반면, protected는 외부에서 접근은 불가능하지만 자식 클래스에서는 접근할 수 있다.
    _score) {
        this.first = first;
        this.last = last;
        this._score = _score;
    }
    secretMethod() {
        console.log("SECRET METHOD!");
    }
    fullName() {
        return `${this.first} ${this.last}`;
    }
    get score() {
        return this._score;
    }
    set score(newScore) {
        if (newScore < 0) {
            throw new Error("Score cannot be Negative!");
        }
        this._score = newScore;
    }
}
class SuperPlayer extends Player {
    constructor() {
        super(...arguments);
        this.isAdmin = true;
    }
    maxScore() {
        this._score = 999999;
    }
}
const elton = new Player("Elton", "Steele", 100);
elton.fullName;
elton.score = 99;
// implements로 연결한다.
// interface안의 프로퍼티에 대한 정의가 있어야 한다.
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`${this.color} ${this.brand}`);
    }
}
const bike1 = new Bike("red");
const Jacket1 = new Jacket("Prada", "black");
// abstract는 메서드의 타입뿐만 아니라 해당 메서드를 instance에게 강제적으로 되물림 시킨다.
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
    greet() {
        console.log("HELLO!");
    }
}
// getPay() 를 쓰지 않으면 error을 발생시킨다.
class FullTimeEmployee extends Employee {
    constructor(first, last, pay) {
        super(first, last);
        this.pay = pay;
    }
    getPay() {
        return this.pay;
    }
}
class ParTimeEmployee extends Employee {
    constructor(first, last, hourlyRate, hoursWorked) {
        super(first, last);
        this.hourlyRate = hourlyRate;
        this.hoursWorked = hoursWorked;
    }
    getPay() {
        return this.hourlyRate * this.hoursWorked;
    }
}
const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());
const bill = new ParTimeEmployee("Bill", "billerson", 24, 1100);
console.log(bill.getPay());
