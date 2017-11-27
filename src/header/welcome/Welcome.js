import React from 'react';
import './welcome.scss';


export const Welcome = ({ name }) => {
	var hr = (new Date()).getHours();
	if(hr >= 22 || hr <= 3) {
		return <h2>Good night, {name}!</h2>
	}
	if(hr > 3 || hr <= 12) {
		return <h2>Good morning, {name}!</h2>
	}
	if(hr > 12 || hr <= 18) {
		return <h2>Good afternoon, {name}!</h2>
	}
	if(hr > 18 || hr < 22) {
		return <h2>Good evening, {name}!</h2>
	}
	else
		return <h2>What time is it, {name}?</h2>

};