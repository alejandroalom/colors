import React from 'react';

function BoxColor({ color, inputColor, refBox }) {
  const isMatch = color === inputColor.trim().toLowerCase();

  return (
    <div
      ref={refBox}
      className={`box ${color}`}
      style={{
        backgroundColor: isMatch ? color : 'transparent',
        borderColor: color
      }}
    >
      <p>{isMatch ? `I'm the color ${color}!` : `I'm not the color ${inputColor}`}</p>
    </div>
  );
}

export default BoxColor;


