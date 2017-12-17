import React from 'react';
import './userList.scss';

export const Username = (props) => {
  return (
    <div className="name">
      <span>{props.fName} </span>
      <span>{props.lName} </span>
      <span>{props.age} </span>
    </div>
  )
};

export const ListComponentName = (props) => {
  return (
    <div className="name">
      <ul>{
        props.usersList.map(user =>
          <li key={user.id}>
            <Username
              fName={user.fName}
              lName={user.lName}
              age={user.age}
            />
          </li>)
      }
      </ul>
    </div>
  );
};
