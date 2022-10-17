// 객체인 매개변수에 각각의 키값에 타입을 설정하고 있다.
function printName(person: { first: string; last: string }): void {
  console.log(`${person.first} ${person.last}`);
}
// 함수의 반환하는 값에 타입을 설정하고 있다
function randomCoordinate(): { x: number; y: number } {
  return { x: Math.random(), y: Math.random() };
}

// 객체인 변수에 타입을 설정하고 있다.
let coordinate: { x: number; y: number } = { x: 34, y: 2 };

// colt가 처음 타입스크립트를 쓸 때 엄청 헷갈렸던 것
printName({ first: "Mick", last: "Jagger" }); //age: 473}) // 지정된 프로퍼티 외에 다른 프로퍼티를 사용할 경우 에러를 띄운다.
const singer = { first: "Mick", last: "Jagger", age: 473 };
printName(singer); // 하지만 변수를 지정해서 넘길 경우 해당 변수에 printName 함수의 프로퍼티가 있는지 없는지만 확인한다.

// type Alias 타입 별칭
// type alias를 쓸 때 대문자를 쓰는 것이 컨벤션이다.
type Point = {
  x: number;
  y: number;
};

let coordinateAlias: Point = { x: 34, y: 2 };

function randomCoordinateAlias(): Point {
  return { x: Math.random(), y: Math.random() };
}

function doublePoint(point: Point): Point {
  return { x: point.x * 2, y: point.y * 2 };
}

// 중첩객체

type Song = {
  title: string;
  artist: string;
  numStreams: number;
  credits: { producer: string; writer: string };
};

function calculatePayout(song: Song): number {
  return song.numStreams * 0.0033;
}

function printSong(song: Song): void {
  console.log(`${song.title} - ${song.artist}`);
}

const mySong: Song = {
  title: "Unchained Melody",
  artist: "Righteous Brothers",
  numStreams: 12783321,
  credits: {
    producer: "Phil spector",
    writer: "koo",
  },
};

const test = calculatePayout(mySong); //
console.log(test);

printSong(mySong);

// 선택적 프로퍼터

type Points = {
  x: number;
  y: number;
  z?: number;
};

const myPoints: Points = { x: 1, y: 2 }; // ?가 있으면 있어도 되고 없어도 된다. 말그대로 선택적!!

// readonly
// javascript 키워드가 아니라 오로지 typescript 키워드다.
// 오로지 읽기 전용으로만 만들어버린다.
// 즉 쓰기, 수정은 불가능하다는 뜻

type User = {
  readonly id: number;
  username: string;
};

const user: User = {
  id: 12837,
  username: "catgual",
};

// user.id = 12345125 이렇게 수정 불가능하다.

// 교차타입
// 타입 다수를 &로 합친다.

type Circle = {
  radius: number;
};

type Colorful = {
  color: string;
};

type ColorfulCircle = Circle & Colorful;

const happyFace: ColorfulCircle = {
  radius: 4,
  color: "yellow",
};

type Cat = {
  numLives: number;
};

type Dog = {
  breed: string;
};

type CatDog = Cat & Dog & { age: number };

const christy: CatDog = {
  numLives: 7,
  breed: "colt",
  age: 1,
};
