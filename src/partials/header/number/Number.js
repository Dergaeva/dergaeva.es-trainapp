import React from 'react';
import './number.scss';

export const Numbers = (from, to, odd, even) => {
  let arr = [];

  for (let i = from; i <= to; i++) {
    arr.push(i);
  }
  if (odd) {
    arr = arr.filter(n => n % 2);
  }
  if (even) {
    arr = arr.filter(n => n % 2 === 0);
  }
  return (
    <ul>
      {
        arr.map((item, index) => <li key={index}>{item}</li>)
      }
    </ul>
  );
};

