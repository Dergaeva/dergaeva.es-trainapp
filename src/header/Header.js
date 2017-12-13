import React, { Component } from 'react';

import { Navigation } from './navigation';
import { Nav } from './navigation';
import { Welcome } from './welcome';
import { Numbers} from './number';

import './header.scss';

export class Header extends Component {
    render() {
        return (
            <header className="header">
                <Welcome name= "Елена" />
                <Navigation islogin />
                <Nav list={['Home', 'Products', 'Contacts']} />
                <Numbers from="5" to="7" even />
            </header>
        )
    }
}

