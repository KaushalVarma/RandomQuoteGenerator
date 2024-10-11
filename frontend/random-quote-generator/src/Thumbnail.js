import React from 'react';

function Thumbnail({ video }) {
  return (
    <div className="thumbnail">
      <img src={video.thumbnailUrl} alt={video.title} />
    </div>
  );
}

export default Thumbnail;
