import React, { Fragment, useContext } from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AuthContext from '../../context/auth/authContext';

const Navbar = ({ title, icon }) => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout, user } = authContext;

    const onLogout = () => {
        logout();
    }

    const authLinks = (
      <Fragment>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>Hello {user && user.name}</li>
        <li>
          <a onClick={onLogout} href="#!">
            <i className="fas fa-sign-out-alt"></i>
            <span className="hide-sm">Logout</span>
          </a>
        </li>
      </Fragment>
    );

    const guestLinks = (
      <Fragment>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </Fragment>
    );


  return (
    <div className="navbar bg-primary">
      <Link to="/">
        <h1>
          <i className={icon} /> {title}
        </h1>
      </Link>
      <ul>
              {isAuthenticated ? authLinks : guestLinks}
              
      </ul>
    </div>
  );
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string
}

Navbar.defaultProps = {
    title: 'Contact Management',
    icon: 'fas fa-id-card-alt'
}

export default Navbar