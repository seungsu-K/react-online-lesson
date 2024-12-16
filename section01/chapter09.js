// 조건문
// 특정 조건을 만족했을 때에만 실행되는 코드를 작성하기 위한 문법
// if, switch

// 1. if 문
// ()안에 조건문, {}는 조건이 참일 경우 실행할 코드, else {}는 조건이 거짓을 경우 실행할 코드
// 여러 개의 조건을 사용할 경우 else if 문으로 조건을 추가
let num = 5;

if (num >= 10) {
  console.log('num은 10 이상입니다');
} else if (num >= 5) {
  console.log('num은 5이상 10미만입니다');
} else {
  console.log('num은 5 미만입니다');
}

// 2. switch 문
// 다수의 조건을 처리할 때 if 문보다 직관적
// 조건과 일치하는 case를 찾아서 순차적으로 탐색하고 일치하는 조건 이후의 모든 코드를 실행한다.
// 원하는 조건에서 끝내고 싶은 경우 break 키워드를 사용;
// case에 없는 조건의 경우 default 키워드
let animal = 'cat';

switch (animal) {
  case 'cat': {
    console.log('고양이');
    break;
  }
  case 'dog': {
    console.log('강아지');
    break;
  }
  case 'tiger': {
    console.log('호랑이');
    break;
  }

  default: {
    console.log('예시가 잘못 되었습니다.');
  }
}
