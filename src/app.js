import React from 'react';
import ReactDom from 'react-dom';

import { Navigation } from './Navigation'

const  Component = (
	<div>
		<h1>Hello, react easycode!</h1>
		<Navigation />
	</div>
);

ReactDom.render(Component, document.getElementById('app'));
