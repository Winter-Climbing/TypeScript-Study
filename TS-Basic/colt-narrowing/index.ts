// 타입 좁히기

function triple(value: number | string) {
  if (typeof value === "string") {
    return value.repeat(3);
  }
  value; // 위의 return을 통해 타입이 number라는 것을 파악했다. 똑똑한 TS!
}

// truthy 타입 좁히기
// null, undefined 없애기

const el = document.getElementById("idk");
if (el) {
  el;
} else {
  el;
}

const printLetters = (word?: string) => {
  if (word) {
    for (let char of word) {
      console.log(char);
    }
  } else {
    console.log("YOU DID NOT PASS IN A WORD!");
  }
};

// 동등 연산자로 좁히기

function someDemo(x: string | number, y: string | number) {
  if (x === y) {
    console.log(x);
  }
}

// in연산자로 좁히기
// 단점은 모든 객체의 속성을 알아야 한다.
// 해당 예시는 간단한 예시기에 괜찮지만 만약 볼륨이 방대해진다면 문제가 생길 수 있다.
// 이런 점을 해결하기 위해 predicate나 discriminate와 같은 방법이 생겼다.

interface Movie {
  title: string;
  duration: number;
}

interface TVShow {
  title: string;
  numEpisodes: number;
  episodeDuration: number;
}

function getRuntime(media: Movie | TVShow) {
  if ("numEpisodes" in media) {
    return media.numEpisodes * media.episodeDuration;
  }
  return media.duration;
}

getRuntime({ title: "Amadeus", duration: 140 });
getRuntime({ title: "Spongebob", duration: 80, episodeDuration: 30 });

// instanceof 연산자로 좁히기
// 클래스 2개 이상을 비교해서 타입을 좁히고 싶을 때 사용
// 프로토타입 체인을 이용한다.

function printFullDate(date: string | Date) {
  if (date instanceof Date) {
    console.log(date.toUTCString());
  } else {
    console.log(new Date(date).toUTCString());
  }
}

class User {
  constructor(public username: string) {}
}

class Company {
  constructor(public name: string) {}
}

function printName(entity: User | Company) {
  if (entity instanceof User) {
    entity;
  } else {
    entity;
  }
}
