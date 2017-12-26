import ReactModal from 'react-modal';
import { getTasksInfo } from 'services/tasksService';
import './main.scss';

export class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      openModal: false,
      info: null
    };
  }

  componentDidMount() {
    getTasksInfo()
      .then(info => this.setState({ info }));
  }

  updateModal(isOpen) {
    this.setState({ openModal: isOpen });
  }

  render() {
    const { info } = this.state;

    return (
      <main className="main">
        <h1>Hello, {this.props.name}</h1>

        {
          info &&
          <article>
            <p>You have {info.total} tasks</p>
            <p>Well done: {info.done}</p>
            <p>In progress: {info.inProgress}</p>
            <p>Waiting: {info.waiting}</p>
          </article>
        }

        <ReactModal
          isOpen={this.state.openModal}
          contentLabel="Minimal Modal Example"
          shouldCloseOnEsc
          ariaHideApp={false}
        >
          <p>Hello</p>
          <button onClick={() => this.updateModal(false)}>Close</button>
        </ReactModal>
      </main>
    );
  }
}
