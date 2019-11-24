import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/containers/Register.scss';

const Register = () => (
  <section className='register'>
    <section className='register__container'>
      <h2>Regístrate</h2>
      <form className='register__container--form'>
        <input aria-label='Nombre' type='text' className='input' placeholder='Nombre' />
        <input aria-label='Correo' type='text' className='input' placeholder='Correo' />
        <input aria-label='Contraseña' type='password' className='input' placeholder='Contraseña' />
        <button type='submit' className='button'>Registrarme</button>
      </form>
      <Link className='register__container--iniciar-sesion' to='/login'>Iniciar sesión</Link>
    </section>
  </section>
);

export default Register;
