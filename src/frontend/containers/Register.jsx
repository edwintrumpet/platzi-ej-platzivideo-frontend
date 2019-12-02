import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { registerUser } from '../actions';
import '../assets/styles/containers/Register.scss';

const Register = ({ registerUser, history }) => {
  const [formValues, setFormValues] = useState({
    email: '',
    name: '',
    password: '',
  });
  const handleInput = (event) => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    registerUser(formValues, '/login');
  };
  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            name='name'
            aria-label='Nombre'
            type='text'
            className='input'
            placeholder='Nombre'
            onChange={handleInput}
            autoComplete='true'
            required
          />
          <input
            name='email'
            aria-label='Correo'
            type='text'
            className='input'
            placeholder='Correo'
            onChange={handleInput}
            autoComplete='true'
            required
          />
          <input
            name='password'
            aria-label='Contraseña'
            type='password'
            className='input'
            placeholder='Contraseña'
            onChange={handleInput}
            autoComplete='true'
            required
          />
          <button type='submit' className='button'>Registrarme</button>
        </form>
        <Link className='register__container--iniciar-sesion' to='/login'>Iniciar sesión</Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerUser,
};

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Register);
