import React from 'react';
import './Body.css';

export default function Body() {
  const test = localStorage.getItem('task');
  console.log(test);
  return (
    <div className="main-body">
      <h2 className="title-txt">Today</h2>
      <p>{test}</p>
    </div>
  );
}
