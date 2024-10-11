import React, { useState } from 'react';

function LikeButton({ video }) {
  const [likes, setLikes] = useState(video.likes || 0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="like-button">
      <button onClick={handleLike}>Like</button>
      <p>{likes} {likes === 1 ? 'Like' : 'Likes'}</p>
    </div>
  );
}

export default LikeButton;
