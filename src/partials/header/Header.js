import { Navigation } from './navigation/index';
import './header.scss';

export const Header = ({ login, setLoginState }) => (
  <header className="header">
    <Navigation islogin />
    {login && <button onClick={() => setLoginState()}>Logout</button>}
  </header>
);
