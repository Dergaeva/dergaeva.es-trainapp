import React from 'react';
import './navigation.scss';

const items = [
    {label: 'Home', id: 'fgfgfgfg'},
    {label: 'Contacts', id: 'dfgdfgdfg'}
];

export const Navigation = () => {
    return (
        <nav className="main-nav">
            <ul>
                {
                    items.map((item, index) => (
                    <li key={item.id}>
                        <a href={`/${item.label.toLowerCase()}`}>{item.label}</a>
                    </li>
                    ))
                }
            </ul>
        </nav>
    );
};
