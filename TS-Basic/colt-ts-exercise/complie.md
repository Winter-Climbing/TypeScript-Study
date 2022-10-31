# 컴파일러

### 터미널 명령어

<br>

1. tsc --init (터미널)

- tsconfig.json 생성

<br>

2. tsc -w, tsc --watch (터미널)

- 감시 모드로, 저장하면 작업한 ts파일이 js파일로 컴파일된다.

<br>
<hr>

<br>

### 컴파일러

<br>

1. "files": ["1.ts", "2.ts"] (바깥 블록 레벨 스코프에 작성해야 한다.(끝에))

- files에 정의된 파일들만 컴파일 된다.
- files가 정의되어 있으면 include와 exclude는 자동으로 예외처리된다.

<br>

2. "include": ["src"], "exclude": ["src/dontTouch.ts"] (바깥 블록 레벨 스코프에 작성해야 한다.(끝에))

- src '폴더' 안에 있는 파일들만 컴파일 된다.
- src '폴더' 안에 dontTouch파일은 컴파일에서 제외한다.
- exclude의 경우 파일 이름에 특정 패턴을 넣어서 컴파일 제외 파일을 미리 지정한다. ex) ['**.ts']
- 라이브러리가 ts파일로 만들어졌을 경우 "exclude": ["node_modules"]을 추가 해야한다. 안 그러면 끔찍하다

<br>

3. "outDir": "./dist"

- 컴파일 된 js파일을 dist폴더로 이동시킨다

<br>

4. "target": "es5"

- 컴파일 되는 js파일의 버전을 설정한다.

<br>

5. "strict": true, "strictNullCheck": true

- "use Strict"을 뜻한다.
