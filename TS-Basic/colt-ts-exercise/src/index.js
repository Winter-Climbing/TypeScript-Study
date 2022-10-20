// ts는 문서 객체와 관련한 타입을 자동으로 인지한다. - ex) document의 타입은 자동으로 document로 annotation 된다.
// document가 타입스크립트 안에서 어떻게 정의되어 있는지 확인하려면 document를 쓰고 해당 단어에 커서를 갔다 댄 다음 오른쪽 클릭 후 형식 정의로 이동을 누르면 된다.
// document는 interface를 통해 끊임없이 뻗어나가고 있다.
// tsconfig.json의 lib 항목은 타입 annotation을 사용자가 정의할 수 있도록 하는 설정이다.
// lib 항목이 주석 처리되어 있다면 기본적으로 dom를 뜻한다.
// lib 항목의 주석을 해제하면 기본값이 빈 배열로 바뀐다.
const btn = document.getElementById("btn");
console.log(btn);
"hello".replaceAll();
