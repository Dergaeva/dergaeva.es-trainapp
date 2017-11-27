import React from 'react';
import './number.scss';


export const Numbers = ({ from, to, odd, even }) => {
	const a = [];
	function count () {
		for (var i = from; i <= to; i++) {
			a.push(i);
		}
		return a;
	}
	if(odd) {
		count();
		let odds = a.filter(n => n%2);
		return (
			<ul>
				{
					odds.map((item, index) => (
						<li key={index}>{item}</li>
					))
				}
			</ul>
		)
	}
	if(even) {
		count();
		let even = a.filter(n => n%2===0);
		return (
			<ul>
				{
					even.map((item, index) => (
						<li  key={index}>{item}</li>
					))
				}
			</ul>
		)
	}
	else
		count();
		return (
			<ul>
				{
					a.map((item, index) => (
						<li  key={index}>{item}</li>
					))
				}
			</ul>
		)
};