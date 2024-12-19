// 구조 분해 할당
// 객체, 배열에 저장된 요소를 분해해서 각각 다른 변수에 할당하는 것

// 1. 배열의 구조 분해 할당
// 요소의 순서대로 변수에 할당
let arr = [1, 2, 3];

// let one = arr[0];
// let two = arr[1];
// let three = arr[2];

let [one, two, three] = arr;
console.log(one, two, three);

// 요소의 갯수를 넘어가도 오류가 아니고 undefined로 초기화 된 변수가 선언됨

// 2. 객체의 구조 분해 할당
let person = {
  name: 'Kim',
  age: '27',
  hobby: '테니스',
};

// let name = person.name
// let age = person.age
// let hobby = person.hobby

let { age: myAge, name, hobby } = person;
console.log(name, myAge, hobby);

// 존재하지 않는 프로퍼티를 할당하면 undefined로 초기화 된 변수가 선언됨
// 프로퍼티 순서는 상관 없으며, 할당하고자 하는 변수의 이름을 변경하는 것도 가능

// 3. 객체 구조 분해 할당을 이용해 함수의 매개변수를 받는 방법
// 인수로 객체를 넘겨주어야 함
const func = ({ name, age, hobby }) => {
  console.log(name, age, hobby);
};

func(person);
