{
  /**

   */

  // number
  const num: number = 5;

  // string
  const str: string = 'hello';

  //boolean
  const boal: boolean = false;

  //undefined
  let name: undefined; // 😢😢 이렇게 안 쓴다
  let age: number | undefined;
  age = undefined;
  age = 1;
  function find(): number | undefined {
    return undefined;
  }

  //null
  let person: null; // 😢😢 이렇게 안 쓴다
  let person2: string | null;

  // undefined와 null의 경우 or(|)을 쓸 때 거의 undefined를 많이 쓴다. 데이터 타입이 있거나 결정되지 않았거나를 좀 더 명확하게 파악할 수 있기 때문
  // 물론 값이 있거나 없거나를 파악하려면 null을 쓴다.

  

  // unknown 😢😢
  let notSure: unknown = 0;
  notSure = 'he';
  notSure = true;

  // any 😢😢
  let anything: any = 0;
  anything = 'hello';
  anything = true;

  // void
  // void는 return으로 아무 것도 출력할 것이 없을 때 쓴다.
  // 다만 void를 지정하지 않아도 기준 값으로 가지고 있기 때문에 프로젝트 가이드 라인에 따르는 것이 좋다.
  function print(): void {
    console.log('hello');
    return;
  }

  let unusable: void = undefined // 😢😢

  // never
  // never return할 계획이 없을 때 쓴다.
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
    while (true) {}
  }
  let neverEnding: never; //😢😢

  // object
  // 모든 객체 데이터 타입을 쓸 수 있다.
  let obj: object; // 😢😢 타입은 명확할수록 좋다.
  function acceptSomeobject(obj: object) {}
  acceptSomeobject({ name: 'ellie' });
  acceptSomeobject({ animal: 'dog' });
}