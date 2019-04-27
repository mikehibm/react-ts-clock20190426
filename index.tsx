import React, { Component, useEffect, useState } from 'react';
import { render } from 'react-dom';
import Clock from './Clock';
import './style.css';

const App = () => {

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(updateTime, 100);
    return () => clearInterval(id);
  }, []);

  function updateTime(){
    const newTime = new Date();
    if (time.getSeconds() === newTime.getSeconds()) return;
    setTime(newTime);
  }

  return (
    <div style={{width: '100vmin', height: '100vmin', margin: 'auto'}}>
      <Clock time={time}/>
    </div>
  );
}

render(<App />, document.getElementById('root'));
