"use strict";
{
    class CoffeeMaker {
        constructor(coffeeBeans) {
            this.coffeeBeans = coffeeBeans;
        }
        static makeMachine(coffeeBeans) {
            return new CoffeeMaker(coffeeBeans);
        }
        fillCoffeeBeans(beans) {
            if (beans < 0) {
                throw new Error("value for beans should be greater than 0");
            }
            this.coffeeBeans += beans;
        }
        makeCoffee(shots) {
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
    CoffeeMaker.BEANS_GRAMM_PER_SHOT = 7;
    const maker = CoffeeMaker.makeMachine(32);
    maker.fillCoffeeBeans(23);
    console.log(maker);
    class User {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.internalAge = 4;
        }
        get fullName() {
            return `${this.firstName} ${this.lastName}`;
        }
        get age() {
            return this.internalAge;
        }
        set age(num) {
            if (num < 0) {
                throw new Error("0보다 작으면 안 됨");
            }
            this.internalAge = num;
        }
    }
}
