import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { setSearchText } from '../actions';
import '../assets/styles/components/Search.scss';

const Search = ({ isHome, setSearchText }) => {
  const inputStyle = classNames('input', {
    isHome,
  });

  const handleInput = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <section className='main'>
      <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
      <input
        className={inputStyle}
        type='text'
        placeholder='buscar...'
        onChange={handleInput}
      />
    </section>
  );
};

const mapDispatchToProps = {
  setSearchText,
};

export default connect(null, mapDispatchToProps)(Search);
