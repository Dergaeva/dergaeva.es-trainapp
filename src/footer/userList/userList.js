import React from 'react';

import './userList.scss';

export const users =  [
  {
    fName: "Gortovskiy",
    lName: "Oleg",
    age: "50",
    id: 1
  },
  {
    fName: "Ivanova",
    lName: "Olga",
    age: "40",
    id: 2
  },
  {
    fName: "Trydgg",
    lName: "Olena",
    age: "30",
    id: 1
  },
];

export const Username = (props) => {
  return (
    <div class="name">
      <span>{props.fName} </span>
      <span>{props.lName} </span>
      <span>{props.age} </span>
    </div>
  );
};

export const ListComponentName = (props) => {
  return (
    <div class="name">
    <ul>{
      props.usersList.map(user => <li key={user.id}>{user.fName} {user.lName} {user.age}</li>)
    }</ul></div>
  )};
