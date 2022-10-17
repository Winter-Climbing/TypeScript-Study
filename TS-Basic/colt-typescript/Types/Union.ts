// 유니온 타입은 한 변수가 여러 타입을 가지는 것을 의미한다.
// type alias도 마찬가지다.

let age: number | string | boolean = 21;
age = 23;
age = "24";
age = true;

type Point = {
  x: number;
  y: number;
};

type Loc = {
  lat: number;
  long: number;
};

let coordinates: Point | Loc = { x: 1, y: 1 };
coordinates = { lat: 321.213, long: 23.334 };

// Function
// 함수의 매개변수에도 유니온 타입이 가능하다.

function printAge(age: number | string): void {
  console.log(`You are ${age} years old`);
}

printAge(23);
printAge("23");

// price에 string이 올 수 있으니 예상하는 값이 달라 질 수 있어 오류를 띄운다. 이 문제를 해결하기 위해 제어문을 이용한 타입 좁히기 개념을 사용한다.

function calculateTax(price: number | string, tax: number) {
  // 타입 좁히기
  if (typeof price === "string") {
    price = parseFloat(price.replace("$", ""));
  }
  return price * tax;
  // return price * tax;
}

// Array
// 소괄호로 감싸는 것이 포인트다.

const stuff: (number | string)[] = [1, 2, 3, "das"];

const coords: (Point | Loc)[] = [];
coords.push({ lat: 321.213, long: 23.334 });
coords.push({ x: 1, y: 1 });

// Literal
// 변수에 지정한 값(타입)만 할당 가능하다.
// 그냥 쓰는 건 별 의미없지만 Union 개념과 결합할 경우 유의미한 기능이 된다.

let zero: 0 = 0;
// let hi: "hi" = "HI";     error!!

let mood: "Happy" | "Sad" = "Happy";
mood = "Sad";
// mood = 'Angry'  error!!

type DayOfWeek =
  | "Monday"
  | "Tuesday"
  | "Wedsday"
  | "Thursday"
  | "Friday"
  | "Saturday"
  | "Sunday";

let today: DayOfWeek = "Monday";
today = "Friday";
// today = 'monday'    error!!
