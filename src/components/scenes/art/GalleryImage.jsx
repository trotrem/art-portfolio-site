import React from 'react';
import glamorous from "glamorous";

const cont = {
  backgroundColor: '#eee',
  cursor: 'pointer',
  overflow: 'hidden',
  float: 'left',
  position: 'relative'
}

const GalleryImage = ({ index, photo, onClick, margin }) => {
  return (
    <div style={{ margin, width: photo.width, ...cont }}>
      <img {...photo} onClick={(e) => onClick(e, { index, photo })} />
    </div>
  )
};

export default GalleryImage;