import React from 'react';
import { NavLink } from 'react-router-dom';
import lily from '../img/lily.png';

const Navbar = ({ user }) => {
  const logout = () => {
    window.open("http://localhost:5000/auth/logout", "_self");
  };
  return (
    <div className="navbar">
      <span className="heading">
        <img className="logoLily" src={lily}/>
      </span>
      <span className="heading">
        <NavLink className="link" to="/">
          Home
        </NavLink>
        </span>
        <span className="heading">
        <NavLink className="link" to="/gituser">
          Git User
        </NavLink>
      </span>
      {user ? (
        <ul className="list">
          <li className="listItem">
            <img
              src={user.photos[0].value}
              alt=""
              className="avatar"
            />
          </li>
          <li className="listItem">{user.username}</li>
          <li className="listItembtn" onClick={logout}>
            Logout
          </li>
        </ul>
      ) : (
        <NavLink className="link" to="login">
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
