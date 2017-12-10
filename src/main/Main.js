import React from 'react';

import {Content} from './content';
import {Aside} from './aside';
import {StatusMessage} from '../statusMessage';
import {Counter} from './counter';
import {Button} from '../button';
import {Location} from '../location';

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

export const Post = (props) => {
  const items = props.post
    .map(item => <li key={item.id}>{item[props.title]}{item[props.field]}</li>);
  return props.numered ? <ol>{items}</ol> : <ul>{items}</ul>;
};

export class Main extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      users: [],
      post: []
    };
    this.getUsers();
  }

  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({users}));
  }

  getPost = (users) => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${users.id}`)
      .then(response => response.json())
      .then(post => this.setState({post}));
  };

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
        <Button />
        {loading && <span>Loading ...</span>}
        <List list={this.state.users} field="name" click={this.getPost}/>
        <div className="posts">
          <h3>Posts</h3>
          <Post post={this.state.post} field="body" title="title"/>
        </div>
        <Location />
      </main>
    );
    const {users, post, loading} = this.state;
  }
}
