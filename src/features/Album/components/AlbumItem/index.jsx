import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

AlbumItem.propTypes = {
  album: PropTypes.object.isRequired
};

function AlbumItem({ album }) {
  return (
    <div className="album">
      <img className="album__thumbnail" src={album.thumbnailUrl} alt={album.name} />
      <h4 className="album__name">{album.name}</h4>
    </div>
  );
}

export default AlbumItem;