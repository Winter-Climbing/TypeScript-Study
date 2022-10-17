// 함수에서는 매개변수와 경우에 따라 함수에서 return할 값에도 타입을 설정해야 한다.
// 매개변수에 타입을 설정하지 않으면 자연스레 Any로 설정된다.
// 함수에 반환하는 값이 없다면 자연스레 void로 설정된다.
// 함수를 호출할 때 매개변수 개수를 맞추지 않으면 오류가 난다.

function square(num: number): number {
  return num * num;
}

function greet(person: string) {
  return `Hi there, ${person}!`;
}

const doSomething = (person: string, age: number, isFunny: boolean) => {};
square(3);
greet("Tonya Harding");
doSomething("ChickenFace", 78, true);

// 매개변수 기본값 주기
// 기본값을 주고 싶다면 애너테이션 뒤에 기본값을 줘야 한다.
function defaultF(person: string = "stranger") {
  return `Hi there, ${person}!`;
}

function rando(num: number) {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num;
}

const add = (x: number, y: number): number => {
  return x + y;
};

// 배열 타입에서 타입은 어떻게 추론되는가?
// 배열 속의 요소의 타입을 자동으로 추론한다.
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
  return color.toUpperCase();
});

// void는 undefined를 반환하는 함수다
// 반환하는 것이 없다면 자동으로 애너테이션 되는 타입이다. 즉 작성유무는 컨벤션에 따르면 된다.
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

// Never은 void와는 달리 함수가 아무것도 반환하면 안 된다는 것을 나타내기 위해 쓰인다.
function makeError(msg: string): never {
  throw new Error(msg);
}
