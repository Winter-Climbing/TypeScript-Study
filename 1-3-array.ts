{
  //Array
  const fruits: string [] = ['아', '이'];
  const scroes: Array<number> = [1, 3, 4];
  function printArray(fruits: readonly string[]) {}
  // readonly를 쓸 경우 변수에 불변성을 부여할 수 있어 좀 더 정확성을 높일 수 있다.

  // Tuple👎 -> interface, type alias, class로 대체
  // Tuple이 Array와 다른 점은 서로 다른 타입을 같이 사용하겠다고 할 경우 사용한다.
  let student: [string, number];
  student = ['name', 123];
  student[0] // name
  student[1] // 123
  // 그다지 추천하지 않는다.
  // 왜냐하면 12, 13 줄처럼 인덱스 안에 0, 1이라고 할 경우 실제로 위의 코드를 찾아보지 않고서는 해당하는 데이터 값이 무엇인지 파악하기가 어렵다.
  // 다만 동적으로 리턴하는데 클래스나 인터페이스로 묶기 어려울 때는 사용 가능하다.
}