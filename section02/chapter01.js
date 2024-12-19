// js는 상황에 따라 boolean 타입이 아니지만 참, 거짓으로 평가한다
// 1. Falsy
let f1 = undefined;
let f2 = null;
let f3 = 0;
let f4 = -0;
let f5 = NaN;
let f6 = '';
let f7 = 0n;

if (!f1) {
  console.log('falsy');
}

// 2. Truthy
// 7가지 falsy 값을 제외한 나머지 모든 값
let t1 = 'hello';
let t2 = 123;
let t3 = [];
let t4 = {};
let t5 = () => {};

if (t1) {
  console.log('truthy');
}

// 3. 활용
function printName(person) {
  if (!person) {
    console.log('person의 값이 없음');
    return;
  }
  console.log(person.name);
}

// 만약 person의 값이 undefined라면 printName 함수를 호출할 때 오류가 발생
let person = { name: '이정환' };
printName(person);
