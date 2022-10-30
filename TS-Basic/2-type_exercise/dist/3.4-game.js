"use strict";
const position = {
    x: 0,
    y: 0,
};
const move = (좌표) => {
    if (좌표 === "up") {
        position.y += 1;
    }
    else if (좌표 === "down") {
        position.y -= 1;
    }
    else if (좌표 === "left") {
        position.x -= 1;
    }
    else if (좌표 === "right") {
        position.x += 1;
    }
};
console.log(position);
move("up");
console.log(position);
move("down");
console.log(position);
move("left");
console.log(position);
move("right");
console.log(position);
