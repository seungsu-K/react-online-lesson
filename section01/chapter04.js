console.log('chapter 4');

// 변수, 상수는 값을 저장하는 공간
// 문자열, 숫자, 객체 등등의 데이터를 담아두는 박스

// 1. 변수
let age = 27;

// let 키워드와 함께 변수를 새롭게 생성하는 것을 변수를 선언
// 선언과 동시에 값을 저장하는 것을 변수의 초기화
// let age -> 초기화를 하지 않아도 변수를 선언할 수 있고 undefined가 할당된다.
// 중복된 변수 이름을 사용하면 에러가 뜸

console.log(age);

age = 30;
console.log(age);

// 2. 상수
// 한번 저장된 값을 바꿀 수 없음
// 값을 변경하는 것 자체가 불가능하기 때문에 선언과 동시에 초기화가 반드시 필요하다.
const birth = '1997.01.01';

// 3. 변수 명명규칙 (네이밍 규칙)
// 3-1. $, _ 제외한 기호를 사용할 수 없다.
// let #hi = 0 // error
let $hi = 0;

// 3-2. 변수의 이름을 숫자로 시작할 수 없다.
// let 1name = 0 // error
let _1name = 0;

// 3-3. 예약어(자바스크립트가 사용하기로 약속한 키워드)를 사용할 수 없다.
// let if // error

// 4. 변수 명명 가이드
// 의미가 있는 변수명을 정하는 것이 좋다.
let a = 1;
let b = 1;
let c = a - b;

let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount - refundCount;
