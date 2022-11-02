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
  }
}

// in연산자로 좁히기

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
