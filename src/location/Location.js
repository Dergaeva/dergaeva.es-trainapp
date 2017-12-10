import React, { Component } from 'react';
import './location.scss';

export class Location extends Component {

  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
      active: false
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null
        });
      },
      (error) => this.setState({error: error.message}),
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }

  getLocation = () => {
    this.setState({active: !this.state.active});
  };

  render() {

    const clName = `${this.state.active ? 'active' : ''}`;

    return (
      <div className={clName} style={{ flexGrow: 1, alignItems: 'center', justifyContent: 'center' }}>
        <button onClick={this.getLocation}>Местоположения браузера</button>
        <div className="location" style={{ display: 'none'}}>
          <div>Широта: {this.state.latitude}</div>
          <div>Долгота: {this.state.longitude}</div>
          {this.state.error ? <span>Error: {this.state.error}</span> : null}
        </div>
      </div>
    );
  }
}
