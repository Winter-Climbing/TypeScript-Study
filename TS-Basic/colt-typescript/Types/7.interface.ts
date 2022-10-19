// 인터페이스는 타입 별칭과 대단히 유사하다.

// type Point = {
//   x: number;
//   y: number;
// };

// const pt: Point = { x: 123, y: 54 };

interface Point {
  x: number;
  y: number;
}

const pt: Point = { x: 123, y: 54 };

// readonly, ? 다 똑같이 작동한다
interface Person {
  readonly id: number;
  first: string;
  last: string;
  nickname?: string;
  // sayHi: () => string;
  sayHi(): string; // 위와 아래는 똑같이 매서드의 return 타입이 string이라는 것을 지정한다.
}

const thomas: Person = {
  first: "Thomas",
  last: "Hardy",
  nickname: "Tom",
  id: 21837,
  sayHi: () => "hello",
};

interface Product {
  name: string;
  price: number;
  applyDiscount(discount: number): number; // 매개변수와 반환값에 타입 설정
}

const shoes: Product = {
  name: "Blue Suede Shoes",
  price: 100,
  applyDiscount(amount: number) {
    const newPrice = this.price * (1 - amount);
    this.price = newPrice;
    return this.price;
  },
};

console.log(shoes.applyDiscount(0.4));

// 타입 별칭과 인터페이스의 차이
// 타입 별칭 방식은 프로퍼티를 추가하려면 해당 별칭에 직접 추가해야 하는 반면
// 인터페이스는 바로 그 줄에 해당 인터페이스의 이름을 치고 프로퍼티를 추가할 수 있다.

interface Dog {
  name: string;
  age: number;
}

interface Dog {
  breed: string;
  bark(): string;
}

// 위 2개의 interface가 덮여쓰거나 제거되지 않고 합쳐졌다
const elton: Dog = {
  name: "Elton",
  age: 0.5,
  breed: "Australian Shepherd",
  bark() {
    return "Woof";
  },
};

// 인터페이스의 확장 - 객체 지향!!!
// Dog 인터페이스를 가져오는 (상위 개념)
// ServiceDog 인터페이스를 만들었다. (상위 개념 상속)
interface ServiceDog extends Dog {
  job: "drug sniffer" | "bomb" | "guide dog";
}

const chewy: ServiceDog = {
  name: "Chewy",
  age: 4.5,
  breed: "Lab",
  bark() {
    return "Bark!";
  },
  job: "drug sniffer",
};

// 인터페이스 다중 상속

interface Human {
  name: string;
}

interface Employee {
  readonly id: number;
  email: string;
}

interface Engineer extends Human, Employee {
  level: string;
  languages: string[];
}

const pierre: Engineer = {
  name: "Pierre",
  id: 123897,
  email: "pierre@gmail.com",
  level: "high",
  languages: ["js", "python"],
};

// 인터페이스 vs 타입 별칭

// 1. 인터페이스는 객체 리터럴 형태만 취하는 반면, 타입 별칭은 여러 형태를 취할 수 있다.

// 2. 타입 별칭 방식은 프로퍼티를 추가하려면 해당 별칭에 직접 추가해야 하는 반면
// 인터페이스는 바로 그 줄에 해당 인터페이스의 이름을 치고 프로퍼티를 추가할 수 있다.

// 3. 상속에 있어서 interface는 extends를 사용하는 반면 type alias는 &를 사용한다

// colt는 일단 객체 타입을 묘사할 때는 interface를 사용한다고 한다
