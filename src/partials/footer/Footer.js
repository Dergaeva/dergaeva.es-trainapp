import React from 'react';
import './footer.scss';


import { ListComponentName } from './userList';

const users = [
  {
    fName: 'Gortovskiy',
    lName: 'Oleg',
    age: '50',
    id: 1
  },
  {
    fName: 'Ivanova',
    lName: 'Olga',
    age: '40',
    id: 2
  },
  {
    fName: 'Trydgg',
    lName: 'Olena',
    age: '30',
    id: 3
  },
];

export const Footer = () => (
  <footer className="footer">
    <ListComponentName usersList={users} />
    <img src="images/1.jpg" alt="flower" />
  </footer>
);
