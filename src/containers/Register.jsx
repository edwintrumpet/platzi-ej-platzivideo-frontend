import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/Register.scss';

const Register = () => {
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
    console.log(formValues);
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
          />
          <input
            name='email'
            aria-label='Correo'
            type='text'
            className='input'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            aria-label='Contraseña'
            type='password'
            className='input'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button type='submit' className='button'>Registrarme</button>
        </form>
        <Link className='register__container--iniciar-sesion' to='/login'>Iniciar sesión</Link>
      </section>
    </section>
  );
};

export default Register;
