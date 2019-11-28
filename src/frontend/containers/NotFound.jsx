import React from 'react';
import '../assets/styles/containers/NotFound.scss';

const NotFound = () => (
  <section className='not-found'>
    <div className='not-found__pulse-container'>
      <h1 className='not-found__title'>404</h1>
    </div>
    <p className='not-found__message'>Página no encontrada</p>
  </section>
);

export default NotFound;

