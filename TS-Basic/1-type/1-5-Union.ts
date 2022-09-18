{
  // Union Types: OR 👍👍 많이 쓰인다.
  // 선택할 수 있는 값을 미리 타입으로 설정해놓고 사용한다.

  type Direction = 'left' | 'right' | 'up' | 'down'
  function move(direction: Direction) {
    console.log(direction);
  }
  move('right')

  type TileSize = 8 | 16 | 32
  const tile: TileSize = 16

  // EX) 로그인이 성공하면 성공 메시지를, 실패하면 실패 메시지를 띄운다.
  
  type isLogIn = '성공했어!' | '실패했어!'
  const toBeOrNotToBe = true
  const logIn = (e: isLogIn) => {
    if (toBeOrNotToBe === true) {
      const succes: isLogIn = '성공했어!'
      console.log(succes);
    } else {
      const fail: isLogIn = '실패했어!'
      console.log(fail);
    }
  }

  // Ellie 답안


  // type SuccessState = {
  //   response: {
  //     body: string
  //   }
  // }

  // type FailState = {
  //   reason: string
  // }
  
  // type LoginState = SuccessState | FailState

  // function login(): LoginState {
  //   return {
  //     response: {
  //       body: 'logged in!'
  //     }
  //   }
  // }

  // function printLoginState(state: LoginState) {
  //   if('response' in state) {
  //     console.log(`${state.response.body}`);
  //   } else {
  //     console.log(`${state.reason}`);
  //   }
  // }
}