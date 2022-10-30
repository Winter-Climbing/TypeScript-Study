- 타입 유니온과 switch를 이용해서 case에서 모든 경우의 수를 입력해 놨다면 default에서는 다른 경우의 수를 작성하면 안 된다.

```typescript
type LoadingState = {
  state: "loading";
};

type SuccessState = {
  state: "success";
  response: {
    body: string;
  };
};

type FailState = {
  state: "fail";
  reason: string;
};

type ResourceLoadState = LoadingState | SuccessState | FailState;

function printLoginState(input: ResourceLoadState) {
  switch (input.state) {
    case "loading":
      console.log("😊");
      break;
    case "success":
      console.log("👌");
      break;
    case "fail":
      console.log("😢");
      break;
    default:
      throw new Error(${input.state}) // 이렇게 하면 더 이상 state가 없기 때문에 오류가 난다.
      break;
  }
}
```

- 대게 유니온 타입경우 여러 케이스별로 다른 로직을 적용할때는 switch가 더 좋아요.지금 같은 경우에도 다른 타입(retrying 재시도중)을 추가 한다면 추가된 케이스는 전부다 else에 들어가서 예상하지 못한 오류가 발생하겠죠~? :)
