{
  /*
  * Type Aliases
  타입 커스터마이징
  */

  type Text = string
  const name: Text = 'ellie'

  type Num = number
  type Student = {
    name: string,
    age: number
  }
  const student: Student = {
    name: 'ellie',
    age: 12
  }

  // String Literal Types
  // 타입 커스터마이징 + 값 지정
  type Name = 'name'
  let ellieName: Name
  ellieName = 'name'
  type JSON = 'json'
  const json:JSON = 'json'

  type Boal = true;
  // const isCat: Boal = false // 에러가 뜬다.
}