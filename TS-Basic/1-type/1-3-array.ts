{
  // Array
  const fruits: string[] = ['🍊', '🍎']
  const scroes: Array<number> = [1, 3, 4]

  // readonly를 쓸 경우 함수의 불변성을 보장한다.
  function printArray(fruits: readonly string[]) {
    // ex) push 안 됨
  }

  // Tuple 👎 --> interface, type alias, class 등으로 대체하는 것이 좋다.
  // 서로 다른 타입의 배열을 담을 수 있다.
  // Tuple을 추천하지 않는 이유
  // 1. Tuple을 쓸 경우 해당 배열의 값을 인덱스를 통해 접근하는데 이는 가독성을 떨어뜨린다.
  // 하지만 리액트의 useState와 같이 여러 타입을 가져와 동적으로 변화시켜야 할 경우 사용될 수도 있다.
  let student: [string, number]
  student = ['name', 123]
  student[0] // name
  student[1] // 123
  // 비구조화 할당으로 인덱스를 통해 접근하는 방법을 좀 더 효율적으로 바꿀 수 있다.
  const [name, age] = student
}