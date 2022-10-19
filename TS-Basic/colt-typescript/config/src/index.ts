// tsc --init으로 tsconfig.json 파일을 생성했다.
// 여기서 타입스크립트의 컴파일 설정을 변경할 수 있다.

// tsc -w or tsc --watch
// nodemon같이 저장하면 자동으로 다시 컴파일 된다.

// tsc 명령어는 폴더 단위로 작동한다.
// 즉, 파일 단위로 컴파일 명령을 줄 필요 없다.
// 물론 필요하다면 'tsc index.ts' 라고 파일 이름을 명시하면 된다.
// 그것도 귀찮으면 밑의 설정을 잘 읽어보면 좋다.

// tsconfig.json
// https://www.typescriptlang.org/tsconfig#files 이 곳에서 tsc 명령어를 이용한 파일 컴파일링에 대한 방법들을 찾아볼 수 있다.

// files는 특정 파일들만 tsc를 통해 컴파일링 하도록 만들 수 있다. - 소규모 프로젝트에 어울리는 방법이다.

// include는 특정 폴더만 컴파일하고 지정되지 않은 폴더에 있는 파일들은 무시한다.

// exclude는 특정 파일을 컴파일에서 제외한다. **.test.ts 처럼 특정 패턴으로 지어진 파일들을 지정해서 제외하는 것이 좋은 방법 중 하나다.
// 사용시 주의사항은 만약 node_module이 있을 경우 exclude를 통해 node_module을 제거해주지 않으면 예상치 못한 컴파일링을 통해 문제가 생길 수 있다. 따라서 exclude를 통해 node_module을 제거해주는 것이 꼭 필요하다.

//outDir은 out directory의 줄임말으로서 컴파일 된 js파일을 특정 폴더로 보내는 설정이다. 일반적으로 컴파일 된 js가 담기는 폴더명을 dist라고 짓는 편이다.

//target은 컴파일링되는 js의 버전을 관리한다.

//strict는 typescript 전체의 타입 검사 추가 규칙, 제약 조건이 활성화된다. 즉 컴파일 과정이 엄격해진다. true가 기본값이다.
interface Chicken {
  breed: string;
  eggsPerWeek: number;
  name: string;
  age: number;
}

const norma: Chicken = {
  breed: "Silkie",
  eggsPerWeek: 4,
  name: "Norma",
  age: 2,
};

const juniper: Chicken = {
  breed: "Silkie",
  eggsPerWeek: 4,
  name: "juniper",
  age: 1,
};
