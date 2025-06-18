import React, { useState, useEffect } from 'react';
import styles from './likeButton.module.css';
import likeButton from '@/assets/thumbs-up-svgrepo-com.svg'
import dislikeButton from '@/assets/thumbs-down-svgrepo-com.svg'

function LikeDislike({post}) {
  const [likes, setLikes] = useState(post.reactions.likes);
  const [liked, setLiked] = useState(false)
  const [dislikes, setDislikes] = useState(post.reactions.dislikes);
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
    setLikes(post.reactions.likes);
    setDislikes(post.reactions.dislikes);
    setLiked(false);
    setDisliked(false);
  }, [post]);

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
        <button onClick={handleLike} className = {!liked ? styles.like: styles.liked}>
          <span>
            <img src= { likeButton } width = "10" height = "10" />
            <span> {likes}</span>
          </span>
        </button>

        <button onClick={handleDislike} className = {!disliked ? styles.dislike: styles.disliked}>
          <span>
            <img src= { dislikeButton } width = "10" height = "10" />
            <span> {dislikes}</span>
          </span>
        </button>
      </div>
  );
};


export default LikeDislike;
