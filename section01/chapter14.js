// 스코프
// 변수나 함수에 접근하거나 호출할 수 있는 범위
function funcA() {
  let a = 1;
}

// 변수 a는 함수 내부에 선언되어 있기에 함수 외부에서는 접근할 수 없다.
// 변수 a는 funcA라는 지역 스코프를 갖는다.
console.log(a); // 오류

// 전역 스코프 : 전체 영역에서 접근 가능
// 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1; // 전역 스코프

function funcB() {
  // a에 접근 가능
  console.log(a);
}

// 조건문, 반복문 또한 지역 스코프를 갖는다
// {} 중괄호 블록 내부에서 선언된 모든 변수는 지역 스코프를 갖는다.
