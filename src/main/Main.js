import React from 'react';

import { Content } from './content';
import { Aside } from './aside';
import { StatusMessage } from '../statusMessage';
import { Counter } from './counter';


import './main.scss';

const getProps = (text) => ({
  valid: true,
  text: text || "Best woman"
});

export class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      users: [],
      loading: false
    };
  }

  getUsers = () => {
    this.setState({
      loading: true,
      user: []
    });
    fetch('https://jsonplaceholder.typicode.com/userList')
      .then(response => response.json())
      .then(users => this.setState({ users, loading: false }));
  }

  showUserInfo(user) {
    alert(`${user.email}: ${user.phone}`)
  }

  render() {
    return (
      <section className="main-content">
        <Content />
        <Aside />
        <StatusMessage {...getProps()} />
        <Counter />
        <button onClick={this.getUsers}>
          Get users
        </button>
        {loading && <span>Loading ...</span>}

      </section>
    );
    const { users, loading } = this.state;
  }
}
