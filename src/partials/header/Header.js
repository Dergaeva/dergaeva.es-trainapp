import { Navigation } from 'partials/navigation/index';
import { logout } from 'services/userService';
import './header.scss';

export const Header = ({ user, setLoginState }) => {
  const onLogout = () => {
    logout()
      .then(() => setLoginState(false))
      /* eslint no-console: ["error", { allow: ["error"] }] */
      .catch(console.error);
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="#">
          <img src='images/logo.png' alt="Apps" />
        </a>
      </div>
      <Navigation user={user} />
      {user && <button onClick={onLogout}>Logout</button>}
    </header>
  );
};
