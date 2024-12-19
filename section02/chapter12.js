// 비동기 처리 1. 콜백함수
// 비동기 처리의 결과값을 비동기 함수 외부에서 사용하고자 할 때 콜백 함수를 이용해 원하는 위치에서 호출
function add(a, b, callback) {
  setTimeout(() => {
    const sum = a + b;
    callback(sum);
  }, 3000);
}

add(1, 2, (value) => {
  console.log(value);
});

// 음식을 주문하는 상황
function orderFood(callback) {
  setTimeout(() => {
    const food = '떡볶이';
    callback(food);
  }, 3000);
}

function cooldownFood(food, callback) {
  setTimeout(() => {
    const cooldownedFood = `식은 ${food}`;
    callback(cooldownedFood);
  }, 2000);
}

function freezeFood(food, callback) {
  setTimeout(() => {
    const freezedFood = `냉동된 ${food}`;
    callback(freezedFood);
  }, 2000);
}

orderFood((food) => {
  console.log(food);

  cooldownFood(food, (cooldownedFood) => {
    console.log(cooldownedFood);

    freezeFood(cooldownedFood, (cooldownedFood) => {
      console.log(cooldownedFood);
    });
  });
});

// 작업이 많아질 수록 코드가 깊어짐 -> 콜백 지옥
// promise로 해결
