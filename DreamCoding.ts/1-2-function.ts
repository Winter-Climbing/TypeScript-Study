{
  // // JavaScript 😢😢
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TypeScript
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

  // // TypeScript
  // function fetchNum(id: string): Promise<number> {
  //   // code ...
  //   // code ...
  //   // code ...
  //   return new Promise((resolve, reject) => {
  //     resolve(100);
  //   });
  // }

  // 최신 javascript는 물론 사용 가능
  // 새로운 기능도 있음
  // Optional parameter
  // lastName?: string ?을 붙일 경우 있어도 되고 없어도 된다는 뜻이다. 👍👍
  // lastName: string| undefined 이렇게 할 수도 있지만 이럴 경우 undefined를 항상 정의해 줘야 한다.😢😢
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); 
  }
  printName('Steve', 'Jobs');
  printName('Ellie');
  printName('Steve', undefined);

  // Default parameter
  function printMessage(message: string = 'default message') {
    console.log(message); 
  }
  printMessage();

  // Rest parameter
  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
  
}