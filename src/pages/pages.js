import React, { Component } from 'react';

import { Route, Switch, Redirect } from 'react-router-dom';

import { TaskList } from '../components/TaskList';
import { Main } from '../partials/main'
import { Login } from '../pages/login'

export class Pages extends Component {
  constructor(p) {
    super(p);

    this.state = { isLogin: false, isLoading: false };
  }

  onLogin = (data) => {
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLogin: true });
    }, 1000);
  }

  render() {
    if (!this.state.isLogin) {
      return (
        <Switch>
          <Route
            path="/login"
            render={() => <Login login={this.onLogin} isLoading={this.state.isLoading}/>} />
          <Redirect to="/login" />
        </Switch>
      );
    }


    return (
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/home" exact component={Main} />
        <Route path="/tasks" component={TaskList} />

        <Redirect from="/login" to="/" />



      </Switch>
    );
  }
};

