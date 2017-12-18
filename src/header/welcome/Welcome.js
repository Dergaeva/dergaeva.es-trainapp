import React from 'react';
import './welcome.scss';


export const Welcome = ({ name }) => {
  const hr = (new Date()).getHours();
  let text;
  if (hr >= 22 || hr <= 3) {
    text = 'Good night';
  } else if (hr > 3 || hr <= 12) {
    text = 'Good morning';
  } else if (hr > 12 || hr <= 18) {
    text = 'Good afternoon';
  } else if (hr > 18 || hr < 22) {
    text = 'Good evening';
  } else {
    text = 'What time is it';
  }
  return <h2>{text} {name}</h2>;
};
