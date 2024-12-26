import { useRef, useState } from 'react';
import './Editor.css';

function Editor({ onCreate }) {
  const [content, setContent] = useState('');
  const contentRef = useRef();

  const onChangeContent = (e) => {
    setContent(e.target.value);
  };

  // 엔터키 입력 시 추가 버튼 입력
  const onKeyDown = (e) => {
    if (e.keyCode === 13) {
      onSubmit();
    }
  };

  const onSubmit = () => {
    // 빈 문자열 추가 방지 및 포커스
    if (content === '') {
      contentRef.current.focus();
      return;
    }

    onCreate(content);
    // 추가 후 Input 초기화
    setContent('');
  };

  return (
    <div className="Editor">
      <input
        ref={contentRef}
        value={content}
        onKeyDown={onKeyDown}
        onChange={onChangeContent}
        placeholder="새로운 Todo..."
      />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}

export default Editor;
