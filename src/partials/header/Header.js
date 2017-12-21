import React, { Component } from 'react';

import { Navigation } from './navigation';
import { Nav } from './navigation';
import { Welcome } from './welcome';
import { Numbers } from './number';

import './header.scss';

const tabs = [  { id: 0, title: 'Tab 1', content: 'Some text is here' },
  { id: 1, title: 'Tab 2', content: 'Another content' }, { id: 2, title: 'Tab 3', content: 'Third text' } ];


export class Header extends Component {
  render() {
    return (
      <header className="header">
        <Welcome name="Елена" />
        <Navigation islogin />
        <Nav list={['Home', 'Products', 'Contacts']} />
        <Numbers from="5" to="7" />
      </header>
    );
  }
}

