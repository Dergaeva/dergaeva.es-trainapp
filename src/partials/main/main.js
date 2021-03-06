import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import { getTasksInfo } from 'services/tasksService';
import { setInfo } from 'store';
import './main.scss';

export class MainComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      openModal: false,
    };
  }

  componentDidMount() {
    getTasksInfo()
      .then(this.props.setInfo);
  }

  updateModal(isOpen) {
    this.setState({ openModal: isOpen });
  }

  render() {
    const { user, info } = this.props;

    return (
      <main className="main">
        <h1>Hello, {user.firstName}</h1>

        {
          info &&
          <article>
            <p>You have <strong>{info.total}</strong> tasks</p>
            <p>Done: <strong>{info.done}</strong></p>
            <p>In progress: <strong>{info.inProgress}</strong></p>
            <p>Waiting: <strong>{info.waiting}</strong></p>
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

const mapState = ({ user, info }) => ({
  user,
  info
});

const mapDispatch = {
  setInfo
};

export const Main = connect(mapState, mapDispatch)(MainComponent);
