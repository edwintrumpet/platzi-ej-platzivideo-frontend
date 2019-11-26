import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import gravatar from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';

import logo from '../assets/static/logo-platzi-video.png';
import userIcon from '../assets/static/user-icon.png';

const Header = ({ user, logoutRequest }) => {
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    logoutRequest({});
  };

  return (
    <header className='header'>
      <Link to='/'>
        <img className='header__img' src={logo} alt='logo platzi video' />
      </Link>
      <div className='header__menu'>
        <div className='header__menu--profile'>
          {
            hasUser ?
              <img src={gravatar(user.email)} alt={user.email} /> :
              <img src={userIcon} alt='user' />
          }

          <p>Perfil</p>
        </div>
        <ul>
          {
            hasUser && <li><a href='/'>{user.name}</a></li>
          }
          {
            hasUser ?
              <li><Link to='/login' onClick={handleLogout}>Cerrar Sesión</Link></li> :
              <li><Link to='/login'>Iniciar Sesión</Link></li>
          }
        </ul>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDipatchToProps = {
  logoutRequest,
};

Header.propTypes = {
  user: PropTypes.object.isRequired,
  logoutRequest: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDipatchToProps)(Header);
