//  배열 메서드 1. 요소 조작

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가
// 변경된 배열의 length를 반환
let arr1 = [1, 2, 3];
arr1.push(4, 5); // 5
console.log(arr1); // [1, 2, 3, 4, 5]

// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
arr2.pop(); // 3
console.log(arr2); // [1, 2]

// 3. shift
// 배열의 맨 앞에 있는 요소를 제거하고, 반환
let arr3 = [1, 2, 3];
arr3.shift(); // 1
console.log(arr3); // [2, 3]

// 4. unshift
// 배열의 맨 앞에 새로운 요소를 추가
// 변경된 배열의 length를 반환
let arr4 = [1, 2, 3];
arr4.unshift(0); // 4
console.log(arr4); // [0, 1, 2, 3]

// !! shift, unshift처럼 맨 앞에 있는 요소를 조작하면 인덱스를 조정 해야하기 때문에 비교적 느리게 동작함

// 5. slice
// 배열의 특정 범위를 잘라내서 새로운 배열로 반환
// 원본 배열을 변경시키지 않음
let arr5 = [1, 2, 3, 4, 5];
arr5.slice(2, 5); // [3, 4, 5]
arr5.slice(2); // [3, 4, 5]
arr5.slice(-3); // [3, 4, 5]
console.log(arr5); // [1, 2, 3, 4, 5]

// 6. concat
// 두 개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];

arr6.concat(arr7); // [1, 2, 3, 4]
