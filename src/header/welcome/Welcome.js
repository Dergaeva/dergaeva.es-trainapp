import React from 'react';
import './welcome.scss';


export const Welcome = ({ name }) => {
	var hr = (new Date()).getHours();
	let text;
	if(hr >= 22 || hr <= 3) {
		text = 'Good night';
	}
	if(hr > 3 || hr <= 12) {
		text = 'Good morning';
	}
	if(hr > 12 || hr <= 18) {
		text = 'Good afternoon';
	}
	if(hr > 18 || hr < 22) {
		text = 'Good evening';
	}
	else
		text = 'What time is it';

	return <h2>{text} {name}</h2>;

};