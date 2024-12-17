// 중복으로 작성된 유사한 기능을 하는 코드
// 함수 선언
// 함수를 새롭게 만드는 것

function greeting() {
  console.log('안녕하세요');
}

// 함수 호출
// 함수를 실행하는 것
// 코드의 실행 흐름이 함수 내부로 바뀌고 함수 호출이 끝나면 다시 순차적으로 진행
console.log('호출 전');
greeting();
console.log('호출 후');

// parameter - 매개변수 -> 인수를 받기 위해 선언된 매개체(변수)
function getArea(width, height) {
  let area = width * height;

  // 반환값 -> 함수 호출의 결과값
  // 값을 반환하고 함수가 종료됨
  return area;
}

// argument - 인수 -> 함수를 실행할 때 전달하는 값
let area1 = getArea(10, 20);

// 중첩 함수 : 함수 내부에 선언된 함수

// 함수의 선언을 함수의 호출보다 뒤에 작성해도 오류 없이 동작한다.
// 호이스팅
// 자바스크립트 코드를 실행하기 전에 변수와 함수 선언문을 최상단으로 끌어올린 후 순차적으로 코드를 실행한다.
