import React from 'react';

type HandProps = {
  length: number;
  width: number;
  angle: number;
};

export default ({length, width, angle} : HandProps) => {
  const style = {
    transformOrigin: 'center',
    transform: `rotate(${angle}deg)`
  };

  return (
    <g>
      <rect x="150" y={150-width/2} width={length} height={width} stroke="blue" fill="blue" style={style} />
    </g>
  );
};