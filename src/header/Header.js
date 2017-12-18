import React from 'react';

import { Nav } from './navigation';
import { Welcome } from './welcome';
import { Lifecyrcle } from '../lifecyrcle';

import './header.scss';

export const Header = () => (
  <header className="header">
    <Welcome name="Елена" />
    <Nav list={['Home', 'Products', 'Contacts']} />
    <Lifecyrcle />
  </header>
);
