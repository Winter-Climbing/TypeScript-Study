// 튜플은 JS에는 없는 타입스크립트의 타입이다.
// 튜플은 고정된 길이의 배열이며 요소의 타입이 지정되어 있다.
// 사실 튜플은 많이 사용하지는 않는 타입이다.
// 다만 데이터 간에 긴밀히 연결되어 있다면 튜플은 좋은 선택일 수 있다. - ex) RGB
// 다...만! 객체나 type alias로 표현하는 것이 더 직관적일 수 있다. - ex) HTTP

let tuple: [number, string];
tuple = [10, "ts"];
// tuple = ["ts", 10];  type error

// RGB를 담는 변수를 만들고 싶다면?
// const rgb: number[] = [23, 423, 532, 153]    배열에 요소가 계속해서 추가될 수 있다.
const color: [number, number, number] = [24, 251, 214];

// type alias 튜플
type HTTPResponse = [number, string];

const goodRes: HTTPResponse = [200, "ok"];
// goodRes.push(123)
// goodRes.pop()
// push, pop과 같은 배열 요소에 관한 메소드는 작동한다. 이는 튜플을 초기화할 때 해당 튜플은 백그라운드에 저장되고
// push, pop으로 인한 작동은 호출스택에서 작동하면서 나타나는 문제다.

// 배열 안의 요소에 해당하는 배열만 튜플에 적용됐다.
const responses: HTTPResponse[] = [
  [404, "Not Found"],
  [200, "OK"],
];
