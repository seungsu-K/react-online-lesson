// 형 변환 (Type Casting)
// 어떤 값의 타입을 다른 타입으로 변경하는 것

// 1. 암묵적 형 변환
// 자바스크립트 엔진이 알아서 형 변환을 하는 것

let num = 10;
let str = '20';

const result = num + str;
console.log(result); // 1020 -> num(10)이 암묵적으로 string으로 변경됨
// 자바스크립트 엔진이 불가능한 연산 때문에 오류를 발생시키지 않게 하기 위해서 암묵적으로 변환
// 항상 변환하는 것은 아니고 특정 하나의 변수를 형 변환 했을 때 오류가 발생하지 않는다면 형 변환을 실행

// 2. 명시적 형 변환
// 개발자가 내장함수 등을 통해서 직접 형 변환을 명시하는 것

// 문자열 -> 숫자
let str1 = '10';
let strToNum = Number(str1);
console.log(10 + strToNum); // 20

// 숫자 -> 문자열
let num1 = 20;
let numToStr = String(num1);
console.log(numToStr + '입니다');
