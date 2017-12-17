import React, {Component} from 'react';


import { Nav } from './navigation';
import { Welcome } from './welcome';
import { Lifecyrcle } from '../lifecyrcle';


import './header.scss';

export class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <Welcome name="Елена" />
        <Nav list={['Home', 'Products', 'Contacts']} />
        <Lifecyrcle />

      </header>
    );
  }
}
