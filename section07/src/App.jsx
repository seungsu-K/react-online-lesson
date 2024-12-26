import './App.css';
import Controller from './conponents/Controller';
import Viewer from './conponents/Viewer';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  useEffect(() => {
    console.log(`count : ${count} / input : ${input}`);
  }, [count, input]);
  // 의존성 배열 (dependency array)

  const onClickButton = (value) => {
    setCount(count + value);
    console.log(count);
  };

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  );
}

export default App;
