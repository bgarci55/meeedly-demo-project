import React, { useState, useEffect } from 'react';
import styles from './likeButton.module.css';
import likeButton from '@/assets/thumbs-up-svgrepo-com.svg';
import dislikeButton from '@/assets/thumbs-down-svgrepo-com.svg';

function LikeDislike({ reactionsObject }) {
  const user_id = 1;
  
  const [reactions, setReactions] = useState(reactionsObject || []);

  const likes = reactions.filter(reaction => reaction.reaction === true);
  const dislikes = reactions.filter(reaction => reaction.reaction === false);

  const userReacted = reactions.find(item => item.user_id === user_id);
  const userSavedReaction = reactions.find(item => item.user_id === user_id)?.reaction;
  
  // handles true or false or NULL
  const toggleReaction = (reaction) => {
    if (!userReacted) {
      setReactions([...reactions, { user_id: 1, reaction: reaction }])
      return;
    }

    const updated = reactions.map(item => {
      if (item.user_id === user_id) {
        return { ...item, reaction: reaction };
      }

      return item;
    })

    setReactions(updated)
  };

  return (
    <div className={styles.buttonGroup}>
      <button
        onClick={() => toggleReaction(true)}
        className={userSavedReaction === true ? styles.liked : styles.like}
      >
        <img src={likeButton} width="10" height="10" alt="Like" />
        <span> {likes.length}</span>
      </button>

      <button
        onClick={() => toggleReaction(false)}
        className={userSavedReaction === false ? styles.disliked : styles.dislike}
      >
        <img src={dislikeButton} width="10" height="10" alt="Dislike" />
        <span> {dislikes.length}</span>
      </button>
    </div>
  );
}

export default LikeDislike;