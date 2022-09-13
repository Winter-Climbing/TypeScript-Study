{
  // // JavaScript 😢😢
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TypeScript👍👍
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // JavaScript 😢😢
  // function jsFetchNum(id) {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // // TypeScript👍👍
  // function fetchNum(id: string): Promise<number> {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // 함수명 옆의 :은 해당 함수의 리턴 값을 명시해서 가독성을 높여준다.

  // 최신 javascript 문법은 모두 typescript에서 사용 가능
  // 새로운 기능도 있음
  // Optional parameter
  // lastName?: string ?을 붙일 경우 해당 타입일 수도 있고, undefined일 수도 있다는 뜻이다. (44줄 참조) 👍👍
  // lastName: string| undefined 이렇게 할 수도 있지만 이럴 경우 undefined를 항상 정의해 줘야 한다.😢😢
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); 
  }
  printName('Steve', 'Jobs');
  printName('Ellie');
  printName('Steve', undefined);

  // Default parameter
  // 인자가 아무것도 없을 때 내가 원하는 기본값을 출력하고 싶다면 밑에처럼 작성하면 된다.(49줄 default message)
  function printMessage(message: string = 'default message') {
    console.log(message); 
  }
  printMessage();

  // Rest parameter
  // 모든 전달되는 인자들을 원하는 타입 형태로 받아 온다.
  // 밑에 줄의 ...numbers: number[]는 모든 전달되는 인자들을 숫자 타입의 배열 형태로 받아오는 것을 뜻한다.
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
  
}