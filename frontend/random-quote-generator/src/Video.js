import React from 'react';
import Thumbnail from './Thumbnail';
import LikeButton from './LikeButton';

function Video({ video }) {
  return (
    <div className="video-card">
      <Thumbnail video={video} />
      <a href={video.url} target="_blank" rel="noopener noreferrer">
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}

export default Video;
