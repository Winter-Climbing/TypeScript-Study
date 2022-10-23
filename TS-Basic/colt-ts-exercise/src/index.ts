// ts는 문서 객체와 관련한 타입을 자동으로 인지한다. - ex) document의 타입은 자동으로 document로 annotation 된다.
// document가 타입스크립트 안에서 어떻게 정의되어 있는지 확인하려면 document를 쓰고 해당 단어에 커서를 갔다 댄 다음 오른쪽 클릭 후 형식 정의로 이동을 누르면 된다.
// document는 interface를 통해 끊임없이 뻗어나가고 있다.

// tsconfig.json의 lib 항목은 타입 annotation을 사용자가 정의할 수 있도록 하는 설정이다.
// lib 항목이 주석 처리되어 있다면 기본적으로 dom를 뜻한다.
// lib 항목의 주석을 해제하면 기본값이 빈 배열로 바뀐다.
// nodejs를 사용하여 서버를 만들거나 다른 라이브러리를 사용할 때 필요할 수 있다. - 새로운 항목들을 annotation 해야 하니까

// querySelector와 같은 선택자를 사용할 때 해당 요소를 변수에 할당하면 변수는 HTMLElement || null로 annotation된다.
// 근데 addEventListener는 null이 반환될 수 있는 요소는 사용할 수 없다고 한다. 그렇다면 null이 반환될 수 있는 변수에 addEventListener를 사용할 수 있는 방법은 무엇이 있을까?
// 1. ?을 사용한다. btn?.addEventlistener
// 2. non-null 단언 연산자 - !을 사용한다. const btn = document.getElementById("btn")!
// !은 null의 반환 경우의 수를 제거해버린다. 느낌적으로 위험한 느낌이 들거다. 실제로 위험하다. 따라서 확실하게 html요소에 있을 때 사용해야한다.

interface Todo {
  text: string;
  completed: boolean;
}

// type assertion - 타입 단언 - !

const btn = document.getElementById("btn")! as HTMLButtonElement;

let mystery: unknown = "hello world!";

// const numChars = mystery.length; mystery의 타입을 모르기에 error가 뜬다.

// mystery의 타입이 string 이라고 단언한다!
// 다만 전역에서 벌어지는 일은 아니고 해당 줄에서만 벌어진다.
const numChars = (mystery as string).length;

// DOM에서의 type assertion
// ts는 멍청해서 모든 dom의 객체들에게 하나하나 타입을 설정해주지 못 한다.
// 따라서 타입 단언을 통해 해당 요소의 타입을 배정하도록 지정해주어야 한다.

const input = document.getElementById("todoinput")! as HTMLInputElement;
const form = document.querySelector("form")!;
const list = document.getElementById("todolist")!;

const todos: Todo[] = readTodos();
todos.forEach(createTodo);

function readTodos(): Todo[] {
  const todosJSON = localStorage.getItem("todos");
  if (todosJSON === null) return [];
  return JSON.parse(todosJSON);
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// e의 타입을 어떻게 추론하는걸까?
// ts는 그래도 문맥을 파악할 줄 안다!!
// addEventListener에 'submit'를 썼으니 submitEvent겠지!!
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newTodo: Todo = {
    text: input.value,
    completed: false,
  };
  createTodo(newTodo);
  todos.push(newTodo);

  saveTodos();
  input.value = "";
});

function createTodo(todo: Todo) {
  const newLi = document.createElement("LI");
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = todo.completed;
  checkbox.addEventListener("change", function () {
    todo.completed = checkbox.checked;
    saveTodos();
  });
  newLi.append(todo.text);
  newLi.append(checkbox);
  list?.append(newLi);
}

// // 위를 이렇게 쓸 수도 있다.
// const handleSubmit = (e: SubmitEvent) => {
//   e.preventDefault();
//   console.log("SUBMITTED!");
// };

// form.addEventListener("submit", handleSubmit);
