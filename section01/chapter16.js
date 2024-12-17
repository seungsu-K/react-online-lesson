// 1. 상수 객체
// 상수(const)로 저장해 놓은 객체
// 재할당하는 것은 불가능하지만 프로퍼티를 추가, 수정, 삭제하는 것은 가능

const animal = {
  type: '고양이',
  name: '나비',
  color: 'black',
};

animal.age = 2;
animal.name = '크림';
delete animal.color;

// 2. 메서드
// 값이 함수인 프로퍼티
// 객체의 동작을 정의

const person = {
  name: 'Kim',
  // 메서드 선언
  sayHi() {
    console.log('Hi');
  },
};

person.sayHi();
