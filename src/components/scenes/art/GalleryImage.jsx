import React from 'react';
import glamorous from "glamorous";

const cont = {
  backgroundColor: '#eee',
  cursor: 'pointer',
  overflow: 'hidden',
  float: 'left',
  position: 'relative'
}

const onClick = (photo) => {}

const GalleryImage = ({ index, photo, margin }) => {
  return (
    <div style={{ margin, width: photo.width, ...cont }}>
      <img {...photo} onClick={() => onClick(photo)} />
    </div>
  )
};

export default GalleryImage;