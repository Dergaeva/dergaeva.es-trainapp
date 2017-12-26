import { Header } from 'partials/header';
import { Footer } from 'partials/footer';
import { Pages } from 'pages';
import { checkUser } from 'services/userService';
import './app.scss';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: null
    };
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
    const { user } = this.state;

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

