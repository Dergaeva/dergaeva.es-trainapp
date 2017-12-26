import { Link } from 'react-router-dom';
import { Tabs, Tablink, Tab, TabContent } from 'components/Tabs/index';
import { getTasks, updateTask, removeTask } from 'services/tasksService';

import './tasklist.scss';

const days = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Cб'];

export class TaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    getTasks()
      .then(tasks => this.setState({ tasks }))
      /* eslint no-console: ["error", { allow: ["log"] }] */
      .catch(console.log);
  }

  removeTask = (indexDay, taskIndex) => {
    const tasks = this.state.tasks[indexDay];
    const task = tasks[taskIndex];

    removeTask(task.id)
      .then(() => {
        tasks.splice(taskIndex, 1);
        this.setState({ tasks: [...this.state.tasks] });
      })
      /* eslint no-console: ["error", { allow: ["log"] }] */
      .catch(console.log);
  }

  setTaskState = (task, doneState) => {
    // doneState: undefined | true | false
    task.done = doneState;
    updateTask(task.id, task)
      .then(() => this.setState({ tasks: [...this.state.tasks] }))
      /* eslint no-console: ["error", { allow: ["log"] }] */
      .catch(console.log);
  }

  getClassName(task) {
    if (task.done) {
      return 'done';
    }

    if (task.done === false) {
      return 'progress';
    }

    return '';
  }

  render() {
    const { tasks } = this.state;

    return (
      <Tabs>

        {
          days.map((day, indexDay) => (
            <Tab key={day}>
              <Tablink title={day} />
              <TabContent>
                <ul className="tasks"> {
                  tasks.length &&
                  tasks[indexDay].map((task, taskIndex) => (
                    <li
                      key={task.id}
                      className={this.getClassName(task)}
                    >
                      <Link to={`/tasks/${task.id}?day=${indexDay}`}>
                        {task.title}
                      </Link>

                      {
                        !task.done &&
                        <React.Fragment>
                          <span onClick={() => this.removeTask(indexDay, taskIndex)}>X</span>
                          <span onClick={() => this.setTaskState(task, true)}>\/</span>
                          <span onClick={() => this.setTaskState(task, false)}>~</span>
                        </React.Fragment>
                      }

                    </li>
                  ))}
                </ul>

                <Link to={`/tasks/new?day=${indexDay}`}>Add new</Link>
              </TabContent>
            </Tab>
          ))
        }

      </Tabs>

    );
  }
}
