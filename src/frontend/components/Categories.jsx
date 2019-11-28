import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/Categories.scss';

const Categories = ({ children, title }) => (
  <div className='categories'>
    <h2 className='categories__title'>{title}</h2>
    {children}
  </div>
);

Categories.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default Categories;
