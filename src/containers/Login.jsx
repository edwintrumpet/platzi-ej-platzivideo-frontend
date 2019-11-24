import React from 'react';
import { Link } from 'react-router-dom';
import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';
import '../assets/styles/containers/Login.scss';

const Login = () => (
  <section className='login'>
    <section className='login__container'>
      <h2>Inicia sesión</h2>
      <form className='login__container--form'>
        <input aria-label='Correo' type='text' className='input' placeholder='Correo' />
        <input aria-label='Contraseña' type='password' className='input' placeholder='Contraseña' />
        <button type='submit' className='button'>Iniciar sesión</button>
        <div className='login__container--remember-me'>
          <label htmlFor='cbox1'>
            <input type='checkbox' name='cbox1' id='cbox1' value='checkbox' />
            Recuérdame
          </label>
          <a href='/'>Olvidé mi contraseña</a>
        </div>
      </form>
      <section className='login__container--social-media'>
        <div>
          <img src={googleIcon} alt='Google' />
                    Inicia sesión con Google
        </div>
        <div>
          <img src={twitterIcon} alt='Twitter' />
                    Inicia sesión con Twitter
        </div>
      </section>
      <p className='login__container--register'>
                No tienes ninguna cuenta
        {' '}
        <Link to='/register'>Regístrate</Link>
      </p>
    </section>
  </section>
);

export default Login;

