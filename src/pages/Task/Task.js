// import { updateTask, getTask, createTask } from 'services/tasksService';
//
// export class Task extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {
//       title: 'New',
//       description: '',
//       day: props.location.search.replace(/\D+/, '')
//     };
//   }
//
//   componentDidMount() {
//     const { task } = this.props.match.params;
//
//     if (task !== 'new') {
//       getTask(task)
//         .then(task => this.setState(Object.assign({}, task)));
//     }
//   }
//
//   updateTask = () => {
//     const { task } = this.props.match.params;
//     const taskData = this.state.task;
//
//     if (task !== 'new') {
//       updateTask(task, taskData);
//     } else {
//       createTask(taskData);
//     }
//   }
//
//   render() {
//     const { title } = this.state;
//     return <strong>Task "{title}"</strong>;
//   }
// }



export class Task extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'New',
      description: '',
      day: props.location.search.replace(/\D+/, '')
    };
  }

  componentDidMount() {
    const { task } = this.props.match.params;

    if (task !== 'new') {
      getTask(task)
        .then(task => this.setState(Object.assign({}, task)));
    }
  }

  updateTasks = (e) => {
    const { task } = this.props.match.params;
    let promise;

    if (task !== 'new') {
      promise = updateTask(task, this.state);
    } else {
      promise = createTask(this.state);
    }

    promise.then(() => this.props.history.push('/tasks'));
    e.preventDefault();
  };

  onChange = (e) => {
    const { target } = e;

    this.setState({ [target.name]: target.value });
  };

  render() {
    const { title, description } = this.state;

    return (
      <form onSubmit={this.updateTasks}>
        <input
          type="text"
          name="title"
          value={title}
          onChange={this.onChange}
          placeholder="Enter a title"
        />
        <br />
        <textarea
          name="description"
          cols="30"
          rows="10"
          value={description}
          onChange={this.onChange}
        />
        <br />
        <input
          type="submit"
          value="Save"
        />
      </form>
    );
  }
}
