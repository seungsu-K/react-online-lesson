// 원시 타입
// 프로그래밍에서 가장 기본이 되는 데이터 타입

// 1. Number Type
// 모든 숫자를 포함한다 (정수, 실수, 음수)
// 사칙연산을 할 수 있음 (+, -, *, /)
// 모듈러 연산(나머지 %)

let num1 = 27;
let num2 = 1.5;
let num3 = -20;

// 문자형 같은 숫자형
let inf = Infinity;
let mInf = -Infinity;

let nan = NaN; // 주로 연산이 실패했을 때의 결과값 (문자형 * 숫자형)

// 2. String Type
// '' 또는 ""로 감싸줌. 그렇지 않을 경우 변수로 인식함
// 덧셈연산이 가능 (문자열을 이어붙임)
// `` 문자열 안에 ${변수}를 동적으로 포함할 수 있음 (템플릿 리터럴)

let myName = 'Kim';

// 3. Boolean Type
// 참과 거짓
// 주로 상태를 나타낼 때 사용

let isSwitch = true;
let isEmpty = false;

// 4. Null Type
// 어떠한 값도 할당되지 않았음을 나타냄

let empty = null;

// 5. Undefined Type
// 변수를 선언하고 어떠한 값도 할당하지 않았을 때 자동으로 할당되는 값

let none; // undefined

// null vs undefined
// null은 값이 없음을 명시적으로 할당
// undefined는 초기화하지 않아서 자동으로 할당되는 값
