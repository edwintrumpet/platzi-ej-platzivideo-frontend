import React from 'react';
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
      <a className='register__container--iniciar-sesion' href='/'>Iniciar sesión</a>
    </section>
  </section>
);

export default Register;
