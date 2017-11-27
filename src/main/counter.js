import React,  { Component } from 'react';




export class Counter extends Component {
	constructor() {
		super(); //Component.call(this)
		this.counter = 0;
	}
	clickHandler = (event) => {
		this.counter++;
		console.log(this.counter);
	}
	render() {
		return (
			<div className="counter">
				<button onClick={this.clickHandler}>Inc</button> <span>0</span>
           </div>
       );
   }
}