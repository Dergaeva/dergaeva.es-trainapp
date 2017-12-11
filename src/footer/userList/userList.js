import React from 'react';

import './userList.scss';

export const Username = (props) => {
  return (
    <div className="name">
      <span>{props.fName} </span>
      <span>{props.lName} </span>
      <span>{props.age} </span>
    </div>
  );
};

export const ListComponentName = (props) => {
  return (
    <div className="name">
      <ul>{
        props.usersList.map(user => <li key={user.id}>{user.fName} {user.lName} {user.age}</li>)
      }</ul></div>
)};
