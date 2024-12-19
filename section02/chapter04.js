// Spread 연산자, Rest 매개변수
// 1. Spread 연산자
// 객체나 배열에 저장된 요소를 개별로 나누어 주는 역할
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [arr1[0], arr1[1], arr1[2], arr2[0], arr2[1], arr2[2]];
let arr4 = [...arr1, ...arr2];

console.log(arr3, arr4);

let obj1 = {
  a: 1,
  b: 2,
};
let obj2 = {
  c: 3,
  d: 4,
};
let obj3 = {
  a: obj1.a,
  b: obj1.b,
  c: obj2.c,
  d: obj2.d,
};
let obj4 = {
  ...obj1,
  ...obj2,
};

console.log(obj3, obj4);

function funcA(p1, p2, p3) {
  console.log(p1, p2, p3);
}
funcA(...arr1);

// 2. Rest 매개변수(나머지 매개변수)
// 함수의 매개변수가 정해지지 않았거나 가변적일 때, 설정한 매개변수 이외의 나머지 매개변수를 모아 배열에 저장
// 마지막 매개변수 앞에 `...`을 붙이고, 마지막 매개변수에만 설정할 수 있다.

function funcB(p1, ...rest) {
  console.log(rest);
}
funcB(...arr1);
