import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {

};

function AlbumFeature(props) {
  const albumList = [
    {
      id: 1,
      name: 'Bai hat 1',
      thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/8/f/c/b/8fcbe8f6b383e7b57adb29896089ce27.jpg'
    },
    {
      id: 2,
      name: 'Bai hat 2',
      thumbnailUrl: 'https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/3/5/a/1/35a19f54e8a875bc266c25c16de4b9e4.jpg'
    },
  ];
  return (
    <div>
      <h2>Bai hat yeu thich</h2>
      <AlbumList albumList={albumList} />
    </div>
  );
}

export default AlbumFeature;