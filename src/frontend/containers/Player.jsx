import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getVideoSource } from '../actions';
import '../assets/styles/containers/Player.scss';
import NotFound from './NotFound';

const Player = ({ history, match, playing, getVideoSource }) => {
  const { id } = match.params;
  const hasPlaying = Object.keys(playing).length > 0;

  useEffect(() => {
    getVideoSource(id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button type='button' onClick={() => history.goBack()}>Regresar</button>
      </div>
    </div>
  ) : <NotFound />;
};

const mapStateToProps = (state) => {
  return {
    playing: state.playing,
  };
};

const mapDispatchToProps = {
  getVideoSource,
};

Player.propTypes = {
  playing: PropTypes.object.isRequired,
  getVideoSource: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
