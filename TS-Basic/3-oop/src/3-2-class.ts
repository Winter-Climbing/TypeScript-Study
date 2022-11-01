{
  class MakeCoffee {
    constructor(
      public shots: number,
      public hasMilk: boolean,
      public coffeeBeans: number
    ) {}

    makeCoffee = (shots: number) => {
      const BEANS_GRAMM_PER_SHOT: number = 7;

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

  const kooCoffee = new MakeCoffee(21, false, 21);
  console.log(kooCoffee);
}
