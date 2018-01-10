import { connect } from 'react-redux';
import { Header } from 'partials/header';
import { Footer } from 'partials/footer';
import { Pages } from 'pages';
import { checkUser } from 'services/userService';
import { setUser } from './store';
import './app.scss';

export class AppComponent extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    checkUser()
      .then(user => this.setLoginState(user))
      .catch(() => this.setLoginState(false));
  }

  setLoginState = (user) => {
    this.setState({ user });
  }

  render() {
    const { user } = this.props;

    return (
      <React.Fragment>
        <Header
          user={user}
          setLoginState={this.setLoginState}
        />

        {
          user !== null ?
            <Pages
              user={user}
              setLoginState={this.setLoginState}
            /> : <div>Loading...</div>
        }


        <Footer />
      </React.Fragment>
    );
  }
}

const mapState = ({ user })=> ({
  user
});
const mapDispatch = ({ dispatch })=> ({
  setUser() {dispatch(setUser)}
});

export const App = connect()(AppComponent);

