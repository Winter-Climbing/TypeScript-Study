// 판별 유니온
// 모든 타입의 공통된 속성에 판별자는 추가하는 것이다.
// 밑의 예시에서 kind가 판별 유니온이다.
// 예시에서는 kind를 썼지만 대문자를 쓸 수도 있고 그 밖에 다른 속성을 부여할 수도 있다.

interface Rooster {
  name: string;
  weight: number;
  age: number;
  kind: "rooster";
}

interface Cow {
  name: string;
  weight: number;
  age: number;
  kind: "cow";
}

interface Pig {
  name: string;
  weight: number;
  age: number;
  kind: "pig";
}

interface Sheep {
  name: string;
  weight: number;
  age: number;
  kind: "sheep";
}

type FarmAnimal = Pig | Rooster | Cow | Sheep;

function getFarmAnimalSound(animal: FarmAnimal) {
  switch (animal.kind) {
    case "pig":
      return "Oink!";
    case "cow":
      return "Moooo";
    case "rooster":
      return "Cockadoodledoo!";
    // case "sheep":
    //   return "Baaa!";
    default:
      // 함수가 실행됐는데 위의 case에서 걸러지지 않으면 밑의 내용이 실행되서 에러를 알려야 한다!
      // const shouldNeverGetHere: never = animal;
      // return shouldNeverGetHere
      const _exhaustiveCheck: never = animal;
      return _exhaustiveCheck;
  }
}

const stevie: Rooster = {
  name: "Stevie Chicks",
  weight: 2,
  age: 1.5,
  kind: "rooster",
};

console.log(getFarmAnimalSound(stevie));
