import React from 'react';
import PropTypes from 'prop-types';

const ReactRpgPhoto = ({ url, padding, clickHandler = null }) => {
  const pointer = clickHandler ? 'pointer' : 'auto';

  const styles = {
    imageGridItem: {
      display: 'inline-block',
      boxSizing: 'border-box',
      float: 'left',
      padding,
    },
    imageWrapper: {
      position: 'relative',
      width: '100%',
      paddingBottom: '100%',
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      backgroundRepeat: 'no-repeat',
      cursor: pointer,
    },
  };

  return (
    <div className="imageGridItem" style={styles.imageGridItem}>
      <a onClick={ clickHandler ? clickHandler.bind(this, url) : null }>
        <div className="imageWrapper" style={styles.imageWrapper}></div>
      </a>
    </div>
  );
};

ReactRpgPhoto.propTypes = {
  url: PropTypes.string.isRequired,
  padding: PropTypes.number,
  clickHandler: PropTypes.func,
};

export default ReactRpgPhoto;
