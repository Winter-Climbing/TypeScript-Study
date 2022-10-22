"use strict";

class Player {
  // static을 쓰면 Player에만 보이고 만들어지는 객체에는 안 보인다.
  static description = "Player In Our Game";

  // score와 numLives를(하드코딩의 결과물) 모든 객체에 지정한다.
  // #해시를 쓰면 해당 프로퍼티는 외부에서 바꿀 수 없다
  #score = 0;
  #numLives = 10;

  // 동적인 데이터
  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  // # 프라이빗 필드는 외부에서는 변경 불가능 하지만 내부에서는 함수를 통해 변경할 수 있다.
  updateScore(newScore) {
    this.#score = newScore;
  }
  loseLife() {
    this.#numLives -= 1;
  }
  // get을 썼기에 Player.#score로 호출하지 않고
  // Player.score로 호출할 수 있다.
  // 다만 함수지만 get을 썼기에 값이 변경되지는 않는다.
  // 말그대로 get만 해옴
  get score() {
    return this.#score;
  }

  // set을 통해 조건을 설정한다.
  set score(newScore) {
    if (newScore < 0) {
      throw new Error("Score must be positive!");
    }
    this.#score = newScore;
  }
}

const player1 = new Player("blue", "steele");
console.log(player1);

const player2 = new Player("");
