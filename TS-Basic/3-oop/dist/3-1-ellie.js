"use strict";
{
    const BEANS_GRAMM_PER_SHOT = 7;
    let coffeeBeans = 0;
    function makeCoffee(shots) {
        if (coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
            throw new Error("커피콩이 없엉!");
        }
        coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
        return {
            shots,
            hasMilk: false,
        };
    }
    coffeeBeans += 3 * BEANS_GRAMM_PER_SHOT;
    const coffee = makeCoffee(2);
    console.log(coffee);
}
