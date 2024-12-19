// 단락 평가
// 논리연산식에서 (and 나 or) 첫 번째 피연산자의 값만으로도 연산의 결과값을 확정할 수 있다면, 다음 피연산자에는 접근하지 않음

function returnFalse() {
  console.log('False 함수');
  return false;
}

function returnTrue() {
  console.log('True 함수');
  return true;
}

console.log(returnFalse() && returnTrue());
console.log(returnTrue() || returnFalse());

// 활용
function printName(person) {
  const name = person && person.name;
  console.log(name || 'person의 값이 없음');
}
