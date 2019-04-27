import React from 'react';
import Frame from './Frame';
import Hand from './Hand';

type ClockProps = {
  time: Date
}

function zeroPad(n : number) : String {
  return ('0' + n).slice(-2);
}

function convertTime(hour: number, min: number, sec: number) : String {
  return  `${zeroPad(hour)}:${zeroPad(min)}:${zeroPad(sec)}`;
}

export default ({ time }: ClockProps) => {
  const hour = time.getHours();
  const min = time.getMinutes();
  const sec = time.getSeconds();

  const timeStr = convertTime(hour, min, sec);
  const hAngle = (360 * (hour % 12) / 12) + (360 * min / 60 / 12) - 90;
  const mAngle = (360 * min / 60) + (360 * sec / 60 / 60) - 90;
  const sAngle = (360 * sec / 60) - 90;

  return (
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" >
      <Frame />
      <text x="110" y="185" stroke="gray" fill="gray">{timeStr}</text>
      <Hand length={80} width={6} angle={hAngle}/>
      <Hand length={100} width={3} angle={mAngle}/>
      <Hand length={110} width={1} angle={sAngle}/>
      <circle cx="150" cy="150" r="4" stroke="blue" fill="#faa" />
    </svg>      
  );
}
