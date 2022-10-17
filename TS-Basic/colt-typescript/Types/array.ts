// 배열의 annotatino은 타입을 설정하고 []을 작성한다.
const activeUsers: string[] = ["colt"];
activeUsers.push("Tony");
// activeUsers.push(21);  type error!!

const bools1: boolean[] = [];
const bools2: Array<boolean> = []; // 위와 밑은 똑같은 구문이다.

// 자료형 타입에도 똑같이 적용된다.
type Point1 = {
  x: number;
  y: number;
};

const coords: Point1[] = [];
coords.push({ x: 23, y: 8 });
// coords.push({ x: 23, y: "8" }); 문자열 8은 type error!

// 중첩된 배열
// []을 연속으로 써서 중첩을 표현한다. ex) 3번 중첩된 배열을 표현하려면 [][][]
const board: number[][] = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];
