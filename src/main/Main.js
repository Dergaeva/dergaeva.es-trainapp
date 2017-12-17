import React, { Component } from 'react';


import { Clock } from '../clock';

import './main.scss';

export class Main extends React.Component {
  render() {
    return (
      <main className="main-content">
        <Clock />
      </main>
    );
  }
}
