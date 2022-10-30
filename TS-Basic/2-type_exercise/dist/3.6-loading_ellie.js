"use strict";
function printLoginState(input) {
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
