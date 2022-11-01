{
  type CoffeeCup = {
    shots: number;
    hasMilk: boolean;
  };

  // static은 이미 Math함수에서 마주했다.
  // Math.abs()가 사용 가능했던 이유
  // static은 실무에서 변하지 않는 상수 값, 상태 데이터에 접근할 필요가 없는 함수들이 있다면 static 사용
  class CoffeeMaker {
    static BEANS_GRAMM_PER_SHOT: number = 7; // class level
    // coffeeBeans은 instance level

    constructor(public coffeeBeans: number) {}

    static makeMachine(coffeeBeans: number): CoffeeMaker {
      return new CoffeeMaker(coffeeBeans);
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

  const maker = new CoffeeMaker(32);
  console.log(maker);
  const maker2 = new CoffeeMaker(14);
  console.log(maker2);
  const maker3 = CoffeeMaker.makeMachine(80);
  console.log(maker3);
  console.log(CoffeeMaker.BEANS_GRAMM_PER_SHOT);
}
