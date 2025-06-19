import React, { useState } from 'react';
import styles from './likeButton.module.css';
import likeButton from '@/assets/thumbs-up-svgrepo-com.svg';
import dislikeButton from '@/assets/thumbs-down-svgrepo-com.svg';

function LikeDislike({ reactionsObject = [], user_id = 1 }) {
  const [reactions, setReactions] = useState(reactionsObject);

  const getUserReaction = () => {
    const userReaction = reactions.find(r => r.user_id === user_id);
    return userReaction ? userReaction.reaction : null;
  };

  const userReaction = getUserReaction();
  const likeCount = reactions.filter(r => r.reaction === true).length;
  const dislikeCount = reactions.filter(r => r.reaction === false).length;

  const handleReaction = (type) => {
    const newReaction = type === 'like';
    const userExists = reactions.some(r => r.user_id === user_id);

    if (userExists) {
      const current = reactions.find(r => r.user_id === user_id);

      // Toggle off if same reaction
      if (current.reaction === newReaction) {
        setReactions(reactions.filter(r => r.user_id !== user_id));
        return;
      }

      // Update if switching
      const updated = reactions.map(r =>
        r.user_id === user_id ? { ...r, reaction: newReaction } : r
      );
      setReactions(updated);
    } else {
      // New reaction
      setReactions([...reactions, { user_id, reaction: newReaction }]);
    }
  };

  return (
    <div className={styles.buttonGroup}>
      <button
        onClick={() => handleReaction('like')}
        className={userReaction === true ? styles.liked : styles.like}
      >
        <img src={likeButton} width="10" height="10" alt="Like" />
        <span> {likeCount}</span>
      </button>

      <button
        onClick={() => handleReaction('dislike')}
        className={userReaction === false ? styles.disliked : styles.dislike}
      >
        <img src={dislikeButton} width="10" height="10" alt="Dislike" />
        <span> {dislikeCount}</span>
      </button>
    </div>
  );
}

export default LikeDislike;