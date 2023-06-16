import React from 'react';
import PropTypes from 'prop-types';

function Loading({ loadingText }) {
  return (
    <div className="loading">
      <p className="loading__text">{loadingText}</p>
    </div>
  );
}

Loading.propTypes = {
  loadingText: PropTypes.string,
};

Loading.defaultProps = {
  loadingText: 'Loading',
};

export default Loading;
