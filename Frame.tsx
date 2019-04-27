import React from 'react';

export default () => {
  const numbers = Array.from(new Array(12)).map((v,i) => i);

  return (
    <g>
      <circle cx="150" cy="150" r="120" stroke="gray" fill="#ffd" />
      {numbers.map((i) => { 
        const length = 10;
        const width = 3;
        const angle = 360 * i / 12;
        const style = {
          transformOrigin: 'center',
          transform: `rotate(${angle}deg) `
        };
        return (
          <rect x={150+120-length-4} 
              y={150-width/2} 
              width={length} height={width} 
              fill="gray"
              style={style} />);
      })}
    </g>
  );
};