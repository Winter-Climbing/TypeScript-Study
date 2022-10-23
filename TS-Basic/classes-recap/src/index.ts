// class Player {
//   // 프로퍼티의 key는 타입을 미리 설정해줘야 한다. - 단축 구문을 사용하지 않는 경우
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
  constructor(
    public first: string,
    public last: string,
    // private는 자식 클래스에서 접근할 수 없다.
    // private _score: number
    // 반면, protected는 외부에서 접근은 불가능하지만 자식 클래스에서는 접근할 수 있다.
    protected _score: number
  ) {}

  private secretMethod(): void {
    console.log("SECRET METHOD!");
  }

  fullName(): string {
    return `${this.first} ${this.last}`;
  }

  get score(): number {
    return this._score;
  }

  set score(newScore: number) {
    if (newScore < 0) {
      throw new Error("Score cannot be Negative!");
    }
    this._score = newScore;
  }
}

class SuperPlayer extends Player {
  public isAdmin: boolean = true;
  maxScore() {
    this._score = 999999;
  }
}

const elton = new Player("Elton", "Steele", 100);
elton.fullName;
elton.score = 99;

// interface와 class

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

// interface와 class의 연결
// implements로 연결한다.
// interface안의 프로퍼티에 대한 정의가 있어야 한다.
class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print(): void {
    console.log(`${this.color} ${this.brand}`);
  }
}

const bike1 = new Bike("red");
const Jacket1 = new Jacket("Prada", "black");

// abstract 클래스
// 인스턴스를 만들 수 없는 클래스
// 이게 왜 필요함?
// 패턴을 정의하고, 자식 클래스에서 시행돼야 하는 메서드를 정의하는데 사용된다.

// interface는 메서드의 타입을 지정하는데서 그치지만
interface Test {
  getPay(): number;
}

// abstract는 메서드의 타입뿐만 아니라 해당 메서드를 instance에게 강제적으로 되물림 시킨다.
abstract class Employee {
  constructor(public first: string, public last: string) {}
  abstract getPay(): number;
  greet() {
    console.log("HELLO!");
  }
}
// const example = new Employee() - abstract는 instance를 만들 수 없다.

// getPay() 를 쓰지 않으면 error을 발생시킨다.
class FullTimeEmployee extends Employee {
  constructor(first: string, last: string, private pay: number) {
    super(first, last);
  }

  getPay(): number {
    return this.pay;
  }
}

class ParTimeEmployee extends Employee {
  constructor(
    first: string,
    last: string,
    private hourlyRate: number,
    private hoursWorked: number
  ) {
    super(first, last);
  }

  getPay(): number {
    return this.hourlyRate * this.hoursWorked;
  }
}

const betty = new FullTimeEmployee("Betty", "White", 95000);
console.log(betty.getPay());

const bill = new ParTimeEmployee("Bill", "billerson", 24, 1100);
console.log(bill.getPay());
