import React, {useState} from 'react';
import styles from './Pages/about.module.css'
import tuna from './assets/tuna.jpg'
import LikeDislike from './LikeButton';
import Reply from './ReplyButton';

function CommentHandler() {

  return (
    <>
      <div className = {styles.commentSection}>
        <div className= {styles.profile}>
          <img src= { tuna } width = "40" height = "40" className = {styles.profilePic } />
          <div className = {styles.profileContents}>
            <h1> Example User </h1>
            <p className = {styles.timeStamp}> 2 Hours Ago </p>
          </div>
        </div>

        <p className = {styles.comment}> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
        
        <div className = {styles.likeSection}>
            <LikeDislike className = {styles.likeButtons} />
            <Reply className = {styles.likeButtons} />
        </div>
      </div>
    </>
  );
}

export default CommentHandler;

