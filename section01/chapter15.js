// 객체
// 여라기지 값을 동시에 저장할 수 있는 자료형

// 1. 객체 생성
let obj1 = new Object(); // 객체 생성자
let obj2 = {}; // 객체 리터럴 (주로 사용)

// 프로퍼티 (객체 속성) -> 객체의 실질적인 정보를 담고 있음
// key(이름) : value(값)
// key는 문자열과 숫자만 가능
let person = {
  name: 'Kim',
  age: 30,
  hobby: '테니스',
  10: 10,
  'like cat': true,
};

// 2. 프로퍼티를 다루는 방법
// 2-1. 특정 프로퍼티에 접근 (점 표기법, 괄호 표기법)
// 존재하지 않는 프로퍼티에 접근하면 undefined를 반환
let name = person.name;
let age = person['age'];

// 문자열을 변수에 담아 사용할 수 있어서 동적으로 사용 가능
let property = 'hobby';
let hobby = person[property];

// 2-2. 새로운 프로퍼티를 추가
person.job = 'FE developer';
person['location'] = '서울';

// 2-3. 프로퍼티 수정
person.job = 'developer';
person['location'] = '부산';

// 2-4. 프로퍼티 삭제
delete person.job;
delete person['location'];

// 2-5. 프로퍼티 존재 유무 확인
let result1 = 'name' in person;
