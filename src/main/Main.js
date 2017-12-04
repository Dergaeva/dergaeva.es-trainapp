import React from 'react';

import {Content} from './content';
import {Aside} from './aside';
import {StatusMessage} from '../statusMessage';
import {Counter} from './counter';


import './main.scss';

const getProps = (text) => ({
  valid: true,
  text: text || "Best woman"
});

export const List = (props) => {
  const items = props.list
    .map(item => <li key={item.id} onClick={() => props.click(item)}>{item[props.field]}</li>);
  return props.numered ? <ol>{items}</ol> : <ul>{items}</ul>;
};


export class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {users: []};
    this.getUsers();
  }

  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({users}));
  }

  onUserClick(user) {
    alert(`${user.name}'s phone is ${user.phone}`);
  }

  render() {
    return (
      <main className="main-content">
        <Content/>
        <Aside/>
        <StatusMessage {...getProps()} />
        <Counter/>
        <button onClick={this.getUsers}>
          Get users
        </button>
        {loading && <span>Loading ...</span>}
        <List list={this.state.users} field="name" click={this.onUserClick}/>
      </main>
    );
    const {users, loading} = this.state;
  }
}
