{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // 접근제어자 3가지
  // public
  // protected - 외부에서는 접근이 불가능하지만 class를 상속한 자식에게서는 접근이 가능하다.
  // private - 외부에서는 접근 불가!, getter와 setter를 통해 값 변경이 가능하다.
  class CoffeeMaker {
    private static BEANS_GRAMM_PER_SHOT: number = 7;

    // 상태를 직접적으로 전달 받는 것이 아니라(고양이에게 넌 행복해져야해! 라고 외치는 것이 아니라)
    // class 내의 fillCoffeeBeans함수를 통해 상태가 변경되게 만든다.
    private constructor(private coffeeBeans: number) {}

    // 함수를 통해 해당 객체를 생성할 때 constructor에 private를 주면 객체 생성시에 무조건 해당 함수를 통해 객체를 생성해야 한다.
    // 'constructor(제작자)가 외부 접근이 불가능하다니 함수를 통해 만들어야지 뭐' 라는 아이디어다.
    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
    }

    fillCoffeeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("value for beans should be greater than 0");
      }
      this.coffeeBeans += beans;
    }

    makeCoffee(shots: number): CoffeeCup {
      if (this.coffeeBeans < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
        throw new Error("커피콩이 없엉!");
      }
      this.coffeeBeans -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
      return {
        shots,
        hasMilk: false,
      };
    }
  }

  const maker = CoffeeMaker.makeMachine(32);
  maker.fillCoffeeBeans(23);
  // maker.coffeeBeans = -24와 같은 받아서는 안 되는 값을 제한하지 못 하고 있다.

  //
  // getter는 읽기 전용
  // setter는 쓰기 전용

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }
    private internalAge = 4;
    get age(): number {
      return this.internalAge;
    }
    set age(num: number) {
      if (num < 0) {
        throw new Error("0보다 작으면 안 됨");
      }
      this.internalAge = num;
    }
    constructor(public firstName: string, private lastName: string) {}
  }
  const user = new User("Steve", "jobs");
  console.log(user.fullName);
  user.firstName = "Ellie";
  console.log(user.firstName); // firstName은 바꼈지만
  console.log(user.fullName); // fullName은 그대로 Steve jobs가 나온다. 클래스로 객체를 만들 때 fullName은 결정되었기 때문
  // 하지만 getter를 사용할 경우 Ellie jobs로 변경되는 것을 볼 수 있다.
  // constructor는 오브젝트가 만들어질때 딱 한번 호출되는 생성자 함수다.

  user.age = 6;
  console.log(user);
  console.log(user.age);
}
