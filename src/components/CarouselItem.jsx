import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setFavorite, deleteFavorite } from '../actions';
import '../assets/styles/components/CarouselItem.scss';

import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import removeIcon from '../assets/static/trash-icon.png';

const CarouselItem = ({
  id,
  cover,
  title,
  year,
  contentRating,
  duration,
  isMylist,
  setFavorite,
  deleteFavorite,
}) => {
  const handleSetFavorite = () => {
    setFavorite({
      id, cover, title, year, contentRating, duration,
    });
  };

  const handleDeleteFavorite = (itemId) => {
    deleteFavorite(itemId);
  };

  return (
    <div className='carousel-item'>
      <img className='carousel-item__img' src={cover} alt={title} />
      <div className='carousel-item__details'>
        <div>
          <img src={playIcon} alt='play' />
          {
            isMylist ? (
              <img
                src={removeIcon}
                alt='remove'
                onClick={() => handleDeleteFavorite(id)}
              />
            ) : (
              <img
                src={plusIcon}
                alt='add'
                onClick={handleSetFavorite}
              />
            )
          }
        </div>
        <p className='carousel-item__details--title'>{title}</p>
        <p className='carousel-item__details--subtitle'>
          {`${year} ${contentRating} ${duration} minutos`}
        </p>
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
};

const mapDispatchToProps = {
  setFavorite,
  deleteFavorite,
};

export default connect(null, mapDispatchToProps)(CarouselItem);
