// tsx로 화살표를 사용할 경우 특이 사항이 있다.
// = 뒤에 <T,>를 작성했다.

// const getRandomNumberElement = <T,>(list: T[]): T => {
//   const randIdx = Math.floor(Math.random() * list.length);
//   return list[randIdx];
// }