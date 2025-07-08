import React, { useRef, useState } from 'react';
import BoxColor from './BoxColor';

function MyForm() {
  const [inputColor, setInputColor] = useState('');

  const colors = ['red', 'green', 'pink', 'yellow', 'purple', 'white', 'blue', 'aqua', 'olive'];

  // Creamos un array de refs, uno por cada color
  const boxesRef = useRef([]);

  const handleChange = (e) => {
    setInputColor(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="Escribe un color..."
        value={inputColor}
        onChange={handleChange}
      />
      <div className="container">
        {colors.map((color, index) => (
          <BoxColor
            key={color}
            color={color}
            inputColor={inputColor}
            refBox={(el) => (boxesRef.current[index] = el)}
          />
        ))}
      </div>
    </>
  );
}

export default MyForm;
