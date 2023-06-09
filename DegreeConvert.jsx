import React, { useState } from 'react';

export function ConvertToCel() {
  const [number, setNumber] = useState('');
  const [result, setResult] = useState(0);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      convertToDegrees();
    }
  };

  const convertToDegrees = () => {
    setResult((number * 9) / 5 + 32);
  };

  const text = () => {
    if (result < 0) {
      return 'Look for a jacket and prepare to receive the north pole';
    } else if (result > 0 && result <= 14) {
      return 'You should wear a sweter';
    } else if (result >= 15 && result <= 22) {
      return `It's a nice weather`;
    } else if (result >= 23 && result <= 27) {
      return 'Good weather but you will sweat a little';
    } else if (result > 27) {
      return `It's too hot, you should drink much water`;
    }
  };

  return (
    <>
      <div className='enterNum'>
        <h1>THIS IS A DEGREE CONVERT BY rafahepo</h1>
        <input
          // type="number"
          placeholder='Add a degree'
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className='result' onClick={convertToDegrees}>
          Convert to Fahrenheit
        </button>
        <p className='p-result'>Result: {result} °F</p>
        {text()}
      </div>
    </>
  );
}
