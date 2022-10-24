"use strict";
// 재사용 함수나 재사용 클래스를 정의할 수 있게 해주는 특수 기능 또는 특수 구문이다.
// 대표적인 내장 제네릭
const nums = [];
const colors = [];
// 제네릭을 통해 inputEl이 HTMLInputElement라고 명시했다.
const inputEl = document.querySelector("#username");
console.dir(inputEl);
// inputEl.value = 'Hacked!' error가 뜬다 타입스크립트는 element나 null을 반환한다는 것만 알기 때문이다.
// 이하동문
const btn = document.querySelector(".btn");
function identity(item) {
    return item;
}
// 제네릭 함수 호출
// identity<number>(7);
// identity<string>("hello");
// identity<Cat>({});
function getRandomNumberElement(list) {
    const randIdx = Math.floor(Math.random() * list.length);
    return list[randIdx];
}
getRandomNumberElement(["a", "b", "c"]);
// 제네릭 타입 추론
// DOM Api는 당연하게도 추론할 수 없다.
getRandomNumberElement(["a", "b", "c"]); // <string>을 안써도 요소의 타입을 추론 했다.
// 여러 타입을 가진 제네릭
// T, U, V, 알파벳 순서
// extends로 항상 특정 타입으로 지정한다.
// 당연하게도 제네릭은 타입 별칭, 인터페이스 모두 사용 가능하다.
function merge(object1, object2) {
    return Object.assign(Object.assign({}, object1), object2);
}
const comboObj = merge({ name: "colt" }, { pets: ["blue", "elton"] });
merge({ name: "koo" }, { num: 9 });
function printDoubleLength(thing) {
    return thing.length * 2;
}
// 제네릭에 기본 타입 설정하기
function makeEmptyArray() {
    return [];
}
const nums1 = makeEmptyArray();
const bools = makeEmptyArray();
class Playlistl {
    constructor() {
        this.queue = [];
    }
    add(el) {
        this.queue.push(el);
    }
}
const songs = new Playlistl();
const videos = new Playlistl();
