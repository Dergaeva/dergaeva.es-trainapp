import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Tabs, Tablink, Tab, TabContent } from 'components/Tabs/index';
import { getTasks, updateTask, removeTask } from 'services/tasksService';
import { addTodo, removeTodo } from 'store';

import './tasklist.scss';

const days = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Cб', 'Вс'];

export class TaskListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    getTasks()
      .then(tasks => this.props.addTodo(tasks))
      /* eslint no-console: ["error", { allow: ["log"] }] */
      .catch(console.log);
  }

  removeTask = (indexDay, taskIndex) => {
    const tasks = this.props.tasks[indexDay];
    const task = tasks[taskIndex];

    removeTask(task.id)
      .then(() => {
        this.props.removeTodo({ day: indexDay, index: taskIndex });
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
    const { tasks } = this.props;

    return (
      <Tabs>

        {
          days.map((day, indexDay) => (
            <Tab key={day}>
              <Tablink title={day} />
              <TabContent>
                <ol className="tasks"> {
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
                          <div className="status">
                          <span className="btn-push" onClick={() => this.removeTask(indexDay, taskIndex)}>X</span>
                          <span className="btn-push" onClick={() => this.setTaskState(task, true)}>\/</span>
                          <span className="btn-push" onClick={() => this.setTaskState(task, false)}>~</span>
                          </div>
                        </React.Fragment>
                      }

                    </li>
                  ))}
                </ol>

                <Link className="btn btn-white" to={`/tasks/new?day=${indexDay}`}>Add new</Link>
              </TabContent>
            </Tab>
          ))
        }

      </Tabs>

    );
  }
}

const mapState = ({ tasks }) => ({ tasks });

const mapDispatch = {
  addTodo,
  removeTodo
};

export const TaskList = connect(mapState, mapDispatch)(TaskListComponent)
