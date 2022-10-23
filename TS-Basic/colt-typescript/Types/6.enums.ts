// enum은 코드 전체에서 재사용할 수 있게 명명된 '상수'의 집합이다.
// enum은 js 컴파일링 과정에서 불필요한 코드를 많이 만들어내기 때문에 여러 말이 많다. 따라서 컨벤션을 따르자.
// 참고로 enum 앞에 const를 붙이면 컴파일링 과정에서 생기는 불필요한 코드를 많이 덜어낼 수 있다.
// const enum orderStatus {}

// 딱히 값을 할당하지 않는다면 순서대로 0,1,2,3이 할당된다.
enum OrderStatus {
  PENDING, // 0
  SHIPPED, // 1
  DELIVERED, // 2
  RETURNED, //3
}

const myStatus = OrderStatus.DELIVERED;

function isDelivered(status: OrderStatus) {
  return status === OrderStatus.DELIVERED;
}

isDelivered(OrderStatus.RETURNED);

enum ArrowKeys {
  UP = "up",
  DOWN = "down",
  LEFT = "left",
  RIGHT = "right",
}

ArrowKeys.LEFT;
