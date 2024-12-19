// 배열 메서드 3. 배열 변형
// 1. filter
// 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환

let arr1 = [
  { name: 'Kim', hobby: '테니스' },
  { name: 'Lee', hobby: '테니스' },
  { name: 'Park', hobby: '독서' },
];

const tennisPeople = arr1.filter((item) => item.hobby === '테니스');

// 2. map
// 배열을 순회하면서, 각 요소에 콜백함수를 실행하고 그 반환값들을 모아 새로운 배열로 반환

let arr2 = [1, 2, 3];
const mapResult1 = arr2.map((value, item, arr) => {
  console.log(value, item, arr);
  return item * 2;
});

console.log(mapResult1); // [0, 2, 4]

const names = arr1.map((item) => item.name); // ['Kim', 'Lee', 'Park']

// 3. sort
// 배열을 사전순으로 정렬

let arr3 = ['b', 'c', 'a'];
arr3.sort(); // ['a', 'b', 'c']

// 숫자의 크기 순으로 비교할 경우
let arr4 = [10, 3, 5];
arr4.sort((a, b) => {
  if (a > b) {
    return 1; // 양수일 경우 바꿈
  } else if (a < b) {
    return -1; // 음수일 경우 바꾸지 않음
  } else {
    return 0; // 0일 경우 바꾸지 않음
  }
});

// 4. toSorted
// 원본 배열을 변경하지 않고 정렬된 새로운 배열을 반환
let arr5 = ['b', 'c', 'a'];
const sorted = arr5.toSorted(); // ['a', 'b', 'c']

// 5. join
// 배열의 모든 요소를 하나의 문자열로 합쳐서 반환
let arr6 = ['hi', 'im', 'Kim'];
const joined1 = arr6.join(); // hi,im,Kim
const joined2 = arr6.join(' '); // hi im Kim
