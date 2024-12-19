// 배열 메서드 2. 순회, 탐색
// 1. forEach
// 배열의 모든 요소를 순회하면서, 각각의 요소에 특정 동작을 수행시키는 메서드
let arr1 = [1, 2, 3];

arr1.forEach((value, index, arr) => {
  console.log(value, index, arr);
});

let doubledArr = [];
arr1.forEach((item) => {
  doubledArr.push(item * 2);
});

// 2. includes
// 배열에 특정 요소가 있는지 확인하는 메서드
let arr2 = [1, 2, 3];
arr2.includes(1); // true

// 3. indexOf
// 특정 요소의 인덱스(위치)를 찾아서 반환하는 메서드
// 동일한 요소가 여러 개라면 맨 앞에 있는 요소의 인덱스를 반환
// 존재하지 않는 요소라면 -1을 반환
let arr3 = [1, 2, 3];
arr3.indexOf(2); // 1

// 4. findIndex
// 모든 요소를 순회하면서, 특정 조건(콜백함수)를 만족하는 요소의 인덱스(위치)를 반환하는 메서드
// 조건을 만족하는 요소가 없다면 -1을 반환
let arr4 = [1, 2, 3];
arr4.findIndex((item) => item === 2); // 1

let objectArr = [{ name: 'Kim' }, { name: 'Lee' }];

objectArr.indexOf({ name: 'Kim' }); // -1

// 요소가 객체 값일 경우 indefOf 메서드로 찾을 수 없음

console.log(objectArr.findIndex((item) => item.name === 'Kim')); // 0

// 5. find
// 모든 요소를 순회하면서, 특정 조건(콜백함수)를 만족하는 요소를 반환
let arr5 = [{ name: 'Kim' }, { name: 'Lee' }];

arr5.find((item) => item.name === 'Kim'); // { name: 'Kim' }
