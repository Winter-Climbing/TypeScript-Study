// type predicate - 타입 명제

interface Cat {
  name: string;
  numLives: number;
}

interface Dog {
  name: string;
  breed: string;
}

function isCat(animal: Cat | Dog): animal is Cat {
  return (animal as Cat).numLives !== undefined;
}

function makeNoise(animal: Cat | Dog) {
  if (isCat(animal)) {
    animal;
    return "Meow";
  } else {
    animal;
  }
}
