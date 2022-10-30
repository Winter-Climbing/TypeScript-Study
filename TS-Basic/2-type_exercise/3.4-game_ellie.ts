const position1 = { x: 0, y: 0 };
function move1(direction: "up" | "down" | "left" | "right") {
  switch (direction) {
    case "up":
      position1.y += 1;
      break;
    case "down":
      position1.y -= 1;
      break;
    case "left":
      position1.y -= 1;
      break;
    case "right":
      position1.x += 1;
      break;
    default:
      throw new Error(`unknown direction: ${direction}`);
  }
}
