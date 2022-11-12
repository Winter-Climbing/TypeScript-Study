"use strict";
{
    class CoffeeMachine {
        constructor(coffeeBeans) {
            this.coffeeBeans = coffeeBeans;
        }
        static makeMachine(coffeeBeans) {
            return new CoffeeMachine(coffeeBeans);
        }
        fillCoffeeBeans(beans) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0");
            }
            this.coffeeBeans += beans;
        }
        // grindBeans, preheat, extract 함수는 커피를 만드는데 분명 필요한 함수이나 동시에 사용자에게는 보여줄 필요가 없는 함수들이다.
        // 그래서 private를 통해 정보를 은닉했다.
        grindBeans(shots) {
            console.log(`grinding beans for ${shots}`);
            if (this.coffeeBeans < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error("커피콩이 없엉!");
            }
            this.coffeeBeans -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }
        preheat() {
            console.log(`heating up... 😡😡 `);
        }
        extract(shots) {
            console.log(`Pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false,
            };
        }
        makeCoffee(shots) {
            this.grindBeans(shots);
            this.preheat();
            return this.extract(shots);
        }
    }
    CoffeeMachine.BEANS_GRAMM_PER_SHOT = 7;
    const maker = CoffeeMachine.makeMachine(32);
    maker.fillCoffeeBeans(23);
    maker.makeCoffee(2);
    const maker2 = CoffeeMachine.makeMachine(32);
    // maker2.fillCoffeeBeans(23); interface인 CoffeeMaker에는 fill~~함수가 없기 때문에 error 난다.
    // 간단하게 명세서를 어겼다!
    maker2.makeCoffee(2);
    // 추상화에는 여러 방법이 있지만 여기서는 크게 정보 은닉을(private..) 통한 방법과 interface를 이용하는 방법이 있다.
    // interface가 없는 언어들도 있기 때문에 일단은 정보 은닉을 통해서 구현해본다.
}
