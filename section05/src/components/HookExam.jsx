// hook 관련 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 훅 외부에서 호출할 경우 오류가 발생

import useInput from '../hooks/useInput';

// 2. 조건부로 호출될 수 없음
// 조건문, 반복문 내부에서 호출 불가능

// 3. `use` 접두사를 붙여 나만의 훅(Custom Hook)을 직접 만들 수 있다.
// 컴포넌트마다 반복되는 로직이 있고 useState와 같이 훅을 사용한다면 커스텀 훅을 만들어 분리할 수 있다.

function HookExam() {
  const [input, onChange] = useInput();
  const [input2, onChange2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChange} />
      <input value={input2} onChange={onChange2} />
    </div>
  );
}

export default HookExam;
