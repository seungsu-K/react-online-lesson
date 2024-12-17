// 1. 콜백 함수
// 다른 함수에 인수로 전달된 함수
function main(value) {
  // 원하는 위치에서 함수를 실행할 수 있음
  value();
}

function sub() {
  console.log('sub');
}

main(sub);

// 함수 표현식, 화살표 함수로 사용 가능
main(function () {
  console.log('sub');
});

// 2. 활용
function repeat(count) {
  for (let i = 1; i <= count; i++) {
    console.log(i);
  }
}

function repeatDouble(count) {
  for (let i = 1; i <= count; i++) {
    console.log(i * 2);
  }
}

// 구조가 흡사한 함수를 만드는 경우
// 중복 코드를 발생시키지 않고 간결하게 함수를 만들 수 있다.

function repeat1(count, callback) {
  for (let i = 1; i <= count; i++) {
    callback(i);
  }
}

repeat1(5, (i) => console.log(i));
repeat1(5, (i) => console.log(i * 2));
