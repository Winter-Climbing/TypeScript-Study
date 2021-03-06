{
  // // JavaScript ๐ข๐ข
  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  // // TypeScript
  // function add(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // JavaScript ๐ข๐ข
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

  // ์ต์  javascript๋ ๋ฌผ๋ก  ์ฌ์ฉ ๊ฐ๋ฅ
  // ์๋ก์ด ๊ธฐ๋ฅ๋ ์์
  // Optional parameter
  // lastName?: string ?์ ๋ถ์ผ ๊ฒฝ์ฐ ์์ด๋ ๋๊ณ  ์์ด๋ ๋๋ค๋ ๋ป์ด๋ค. ๐๐
  // lastName: string| undefined ์ด๋ ๊ฒ ํ  ์๋ ์์ง๋ง ์ด๋ด ๊ฒฝ์ฐ undefined๋ฅผ ํญ์ ์ ์ํด ์ค์ผ ํ๋ค.๐ข๐ข
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