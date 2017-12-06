import React, { Component } from 'react';
import './location.scss';

export class Location extends Component {
    render() {
        return (
          <button onClick={this.getLocation}>Try It</button>
        )
    }
}

