import { useState } from 'react';

export default function Inkoop() {
  const [inputValue, setInputValue] = useState('');
  const [Message, setMessage] = useState('');

  const handleInputChange = (event) => {
    let valueAsNumber=event.target.valueAsNumber
    setMessage('');

    // Only allow positive numbers
    if (valueAsNumber < 0) {
        
      setMessage('enter a positive value');
          return;
    }

    // Only allow numbers
    if (isNaN(valueAsNumber)) {
      setMessage('Please enter a valid number');
      return;
    }

    setInputValue(valueAsNumber);

    if (valueAsNumber % 2 == 0) {
      // If the number is even, show the next 3 even numbers
      let nextEvens = [valueAsNumber+2,valueAsNumber+4,valueAsNumber+6];
      
      setMessage(` ${nextEvens.join(', ')}`);
    } else {
      // If the number is odd, show the next 3 odd numbers
      let nextOdds = [valueAsNumber+2,valueAsNumber+4,valueAsNumber+6];
      setMessage(` ${nextOdds.join(', ')}`);
    }
  };

  return (
    <div>
      {/* <label htmlFor="number-input">Enter a number:</label> */}
      <input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
      />
      {Message && <div style={{ color: 'white' }}>{Message}</div>}
    </div>
  );
}

