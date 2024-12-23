import { useState } from 'react';

function Bulb() {
  const [light, setLight] = useState('OFF');
  console.log(light);

  return (
    <div>
      {light === 'ON' ? (
        <h2 style={{ backgroundColor: 'orange' }}>ON</h2>
      ) : (
        <h2 style={{ backgroundColor: 'gray' }}>OFF</h2>
      )}
      <button
        onClick={() => {
          setLight(light === 'ON' ? 'OFF' : 'ON');
        }}
      >
        {light === 'ON' ? '끄기' : '켜기'}
      </button>
    </div>
  );
}

export default Bulb;
