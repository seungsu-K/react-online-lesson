// 순회
// 배열, 객체에 저장된 여러 개의 값에 순서대로 하나씩 접근하는 것

// 1. 배열 순회
let arr = [1, 2, 3];

// 1-1. 인덱스
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// 1-2. for of 반복문 (반복가능한 객체(array, Mat, Set, string 등)에 사용 가능한 명령문)
// 인덱스 없이 요소만 순회
for (let value of arr) {
  console.log(value);
}

// 2. 객체 순회
let person = {
  name: 'Kim',
  age: 27,
  hobby: '테니스',
};

// 2-1. Object.keys
// 객체의 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);

for (let key of keys) {
  console.log(person[key]);
}

// 2-2 Object.values
// 객체의 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);

for (let value of values) {
  console.log(values);
}

// 2-3 for in 반복문 (객체에만 사용 가능한 명령문)
for (let key in person) {
  console.log(person[key]);
}
