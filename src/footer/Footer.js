import React from 'react';
import './footer.scss';

import { Username } from './userList';
import { users } from './userList';
import { ListComponentName } from './userList';

export const Footer = () => (
  <footer className="footer">
    <Username fName='Dergaieva'  lName='Elena' age='30' />
    <ListComponentName usersList={users} />
  </footer>
);
