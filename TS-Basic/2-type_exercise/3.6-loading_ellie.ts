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
      break;
  }
}

printLoginState({ state: "loading" }); // 😊
printLoginState({ state: "success", response: { body: "loaded" } }); // 👌
printLoginState({ state: "fail", reason: "no network" }); // 😢
