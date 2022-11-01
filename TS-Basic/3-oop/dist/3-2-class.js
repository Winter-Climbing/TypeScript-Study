"use strict";
{
    class MakeCoffee {
        constructor(shots, hasMilk, coffeeBeans) {
            this.shots = shots;
            this.hasMilk = hasMilk;
            this.coffeeBeans = coffeeBeans;
            this.makeCoffee = (shots) => {
                const BEANS_GRAMM_PER_SHOT = 7;
                if (this.coffeeBeans < shots * BEANS_GRAMM_PER_SHOT) {
                    throw new Error("커피콩이 없엉!");
                }
                this.coffeeBeans -= shots * BEANS_GRAMM_PER_SHOT;
                return {
                    shots,
                    hasMilk: false,
                };
            };
        }
    }
    const kooCoffee = new MakeCoffee(21, false, 21);
    console.log(kooCoffee);
}
