// 1. null 병합 연산자
// 존재하는 값을 추려내는 기능
// null 이나 undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

// 양쪽의 값 중 null 이나 undefined가 아닌 값을 찾아서 할당
let var4 = var1 ?? var2;
let var5 = var1 ?? var3;

// 둘다 null 이나 undefined가 아니라면 앞에 있는 값을 할당
let var6 = var2 ?? var3;

let userName = 'Kim';
let userNickName = 'Hi';

let displayName = userName ?? userNickName;

// 2. typeof 연산자
// 값의 타입을 문자열로 변화하는 기능을 하는 연산자
// 자바스크립트는 할당한 값의 타입을 동적으로 바꿀 수 있기 때문에
// 예상치 못한 동작을 방지하기 위해서 자료형을 확인하는 것이 중요하다.

let var7 = 1;
var7 = 'hello';

console.log(typeof var7); // string

// 3. 삼항 연산자
// 항을 3개 사용하는 연산자
// 조건식을 이용해서 참, 거짓일 때 값을 다르게 반환할 때
let var8 = 10;

let res = var8 % 2 === 0 ? '짝' : '홀';
