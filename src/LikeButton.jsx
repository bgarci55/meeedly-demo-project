import React, { useState } from 'react';
import styles from './Pages/about.module.css';


function LikeDislike() {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false)
  const [dislikes, setDislikes] = useState(0);
  const [disliked, setDisliked] = useState(false);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
      setLiked(false);
    } else {
      setLikes(likes + 1);
      setLiked(true);
      if (disliked) {
        setDislikes(dislikes - 1);
        setDisliked(false);
      }
    }
  };

  const handleDislike = () => {
    if (disliked) {
      setDislikes(dislikes - 1);
      setDisliked(false);
    } else {
      setDislikes(dislikes + 1);
      setDisliked(true);
      if (liked) {
        setLikes(likes - 1);
        setLiked(false);
      }
    }
  };


  return (
      <div>
        <button onClick={handleLike} className = {!liked ? styles.likeButtons: styles.likedButtons}>
          👍 {likes}
        </button>

        <button onClick={handleDislike} className = {!disliked ? styles.likeButtons: styles.likedButtons}>
          👎 {dislikes}
        </button>
      </div>
  );
};


export default LikeDislike;
