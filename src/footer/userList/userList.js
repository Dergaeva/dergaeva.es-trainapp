import React from 'react';

import './userList.scss';

export const Username = (props) => {
    return (
        <div>
            <span>{props.fName} </span>
            <span>{props.lName} </span>
            <span>{props.age} </span>
        </div>
    );
};