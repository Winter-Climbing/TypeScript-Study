"use strict";
// ts는 문서 객체와 관련한 타입을 자동으로 인지한다. - ex) document의 타입은 자동으로 document로 annotation 된다.
// document가 타입스크립트 안에서 어떻게 정의되어 있는지 확인하려면 document를 쓰고 해당 단어에 커서를 갔다 댄 다음 오른쪽 클릭 후 형식 정의로 이동을 누르면 된다.
// document는 interface를 통해 끊임없이 뻗어나가고 있다.
const btn = document.getElementById("btn");
// type assertion - 타입 단언
let mystery = "hello world!";
// const numChars = mystery.length; mystery의 타입을 모르기에 error가 뜬다.
// mystery의 타입이 string 이라고 단언한다!
// 다만 전역에서 벌어지는 일은 아니고 해당 줄에서만 벌어진다.
const numChars = mystery.length;
// DOM에서의 type assertion
// ts는 멍청해서 모든 dom의 객체들에게 하나하나 타입을 설정해주지 못 한다.
// 따라서 타입 단언을 통해 해당 요소의 타입을 배정하도록 지정해주어야 한다.
const input = document.getElementById("todoinput");
const form = document.querySelector("form");
const list = document.getElementById("todolist");
const todos = readTodos();
todos.forEach(createTodo);
function readTodos() {
    const todosJSON = localStorage.getItem("todos");
    if (todosJSON === null)
        return [];
    return JSON.parse(todosJSON);
}
function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
}
// e의 타입을 어떻게 추론하는걸까?
// ts는 그래도 문맥을 파악할 줄 안다!!
// addEventListener에 'submit'를 썼으니 submittype이겠지!!
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTodo = {
        text: input.value,
        completed: false,
    };
    createTodo(newTodo);
    todos.push(newTodo);
    saveTodos();
    input.value = "";
});
function createTodo(todo) {
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
    list === null || list === void 0 ? void 0 : list.append(newLi);
}
// // 위를 이렇게 쓸 수도 있다.
// const handleSubmit = (e: SubmitEvent) => {
//   e.preventDefault();
//   console.log("SUBMITTED!");
// };
// form.addEventListener("submit", handleSubmit);
