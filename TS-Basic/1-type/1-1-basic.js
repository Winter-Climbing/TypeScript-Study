{
    /**
  
     */
    // 변수를 선언할 때
    // number
    var num = 5;
    // string
    var str = 'hello';
    //boolean
    var boal = false;
    //undefined
    var name_1; // 😢😢 이렇게 안 쓴다
    var age = void 0;
    age = undefined;
    age = 1;
    function find() {
        return undefined;
    }
    //null
    var person = void 0; // 😢😢 이렇게 안 쓴다
    var person2 = void 0;
    // undefined와 null의 경우 or(|)을 쓸 때 거의 undefined를 많이 쓴다. 데이터 타입이 있거나 결정되지 않았거나를 좀 더 명확하게 파악할 수 있기 때문
    // 물론 값이 있거나 없거나를 파악하려면 null을 쓴다.
    // unknown 😢😢
    var notSure = 0;
    notSure = 'he';
    notSure = true;
    // any 😢😢
    var anything = 0;
    anything = 'hello';
    anything = true;
    // void
    // void는 return으로 아무 것도 출력할 것이 없을 때 쓴다.
    // 다만 void를 지정하지 않아도 기준 값으로 가지고 있기 때문에 프로젝트 가이드 라인에 따르는 것이 좋다.
    function print() {
        console.log('hello');
        return;
    }
    var unusable = undefined; // 😢😢
    // never
    // return할 계획이 없을 때 그것을 명시하기 위해 쓴다.
    function throwError(message) {
        // message -> server (log)
        throw new Error(message);
        while (true) { }
    }
    var neverEnding = void 0; //😢😢
    // object
    // 모든 객체 데이터 타입을 쓸 수 있다.
    var obj = void 0; // 😢😢 타입은 명확할수록 좋다. 그렇기에 잘 안 쓴다.
    function acceptSomeobject(obj) { }
    acceptSomeobject({ name: 'ellie' });
    acceptSomeobject({ animal: 'dog' });
}
