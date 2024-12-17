// 함수 표현식과 화살표 함수
function funcA() {
  console.log('funcA');
}

let varA = funcA;
console.log(varA); // 함수의 값 자체가 할당됨

// 이러한 JS의 특징을 이용해 함수를 선언하지 않고 바로 변수에 할당
// 1. 함수 표현식 (호이스팅 되지 않음)
let varB = function funcB() {
  console.log('funcB');
};

varB();
funcB(); // 오류
// 함수를 선언한 것이 아니라 값으로써 varB에 할당한 것이기 때문에 호출할 수 없다.
// -> 그렇기 때문에 함수 이름을 생략해도 문제가 되지 않는다. (익명함수)

// 2. 화살표 함수
let varC = (value) => {
  return value + 1;
};
// 별도의 코드 없이 반환값만 있다면 중괄호와 return 키워드 없어도 됌
// let varC = (value) => value + 1;

console.log(varC(10)); // 11
