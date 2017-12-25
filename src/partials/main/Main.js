import React from 'react';
import ReactModal from 'react-modal';
import { getTaskInfo } from 'services/userService';

import { StatusMessage } from 'components/statusMessage';
import { Tabs, Tab, Tablink, TabNav, TabContent } from 'components/Tabs';
import { Form } from 'components/form';
import { TaskList } from 'pages/TaskList';


import './main.scss';

const tabs = [
  { id: 0, title: 'Tab-1', content: 'Some text is here' },
  { id: 1, title: 'Tab-2', content: 'Another content' },
  { id: 2, title: 'Tab-3', content: 'Third text' }
];

const Article = ({ title, children }) => (

  <article>
    <h1>{title}</h1>
    {children[0]}
  </article>

);

const getProps = (text) => ({
  valid: true,
  text: text || "Best woman"
});


export class Main extends React.Component {

  constructor() {
    super();
    this.state = {
      users: [],
      loading: false,
      openModal: false,
      info: null
    };
  }

  componentDidMount() {
    getTaskInfo()
      .then(info => this.setState({ info }));
  }

  getUsers = () => {
    this.setState({
      loading: true,
      user: []
    });
    fetch('https://jsonplaceholder.typicode.com/userList')
      .then(response => response.json())
      .then(users => this.setState({ users, loading: false }));
  };

  showUserInfo(user) {
    alert(`${user.email}: ${user.phone}`)
  }

  updateModal(isOpen) {
    this.setState ({ openModal: isOpen });
  }

  render() {
    return (
      <section className="main-content">
        <div>Hello, {this.props.name}</div>

        {
          this.state.info &&
        <article>
          <p>You have 10 tasks</p>
          <p>Done:>Done: 3</p>
          <p>In progress: 1</p>
          <p>Waiting:>Waiting: 5</p>
        </article>
        }

        <ReactModal
          isOpen={this.state.openModal}
          contentLabel="Minimal modal example"
          ariaHideApp={false}
        >
        Hello
          <button onClick={() => this.updateModal(false)}>Close</button>
        </ReactModal>
      <TaskList />

      </section>
    );
    const { users, loading } = this.state;
  }
}

