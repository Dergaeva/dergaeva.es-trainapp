import { Header } from './partials/header';
import { Footer } from './partials/footer';
import { Pages } from './pages';

import './app.scss';

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      login: false
    };
  }

  setLoginState = (login) => {
    this.setState({ login });
  }

  render() {
    const { login } = this.state;

    return (
      <div className="wrapper">
        <Header
          login={login}
          setLoginState={this.setLoginState}
        />

        <Pages
          data={login}
          setLoginState={this.setLoginState}
        />

        <Footer />
      </div>
    );
  }
}

