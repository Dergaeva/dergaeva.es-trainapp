import { NavLink } from 'react-router-dom';

import './navigation.scss';

const items = [
  { label: 'Blog', id: 'fgfgfgfg' },
  { label: 'Shop', id: 'dfgdfgdfg' }
];

export const Navigation = (islogin) => {
  return (
    <nav className="main-nav">
      <ul>
        {
          items.map((item, index) => (
            <li key={item.id}>
              <NavLink
                activeClassName="active"
                to={`/${item.label.toLowerCase()}`}>
                {item.label}
              </NavLink>
            </li>
          ))
        }
      </ul>

      <ul>
        <li><a href="/home">Portfolio</a></li>

        {islogin && <li><a href="/logout">Logout</a></li>}
      </ul>
    </nav>
  );
};


export const Nav = (props) => {
  if (props.list) {
    return (
      <nav className="main-nav">
        <ul>
          {
            props.list.map((items, ind) => (
              <li key={ind}>
                <a href={`/${items.toLowerCase()}`}>{items}</a>
              </li>
            ))
          }
        </ul>
      </nav>
    );
  }
  else {
    return (
      <h3>Don't have menu</h3>
    )
  }
};

