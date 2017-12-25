import { Route, Switch, Redirect } from 'react-router-dom';

import { TaskList } from './TaskList';
import { Main } from '../partials/main';
import { Login } from '../pages/login';
import { Task } from '../pages/Task';

export const Pages = ({ user, setLoginState }) => {
  if (!user) {
    return (
      <Switch>
        <Route
          path="/login"
          render={() => <Login login={setLoginState} />}
        />
        <Redirect to="/login" />
      </Switch>
    );
  }

  const main = () => <Main name={user.firstName} />;

  return (
    <Switch>
      <Route path="/" exact component={main} />
      <Route path="/home" exact component={main} />
      <Route path="/tasks" exact component={TaskList} />
      <Route path="/tasks/:task" component={Task} />
      <Redirect from="/login" to="/" />
    </Switch>
  );
};
