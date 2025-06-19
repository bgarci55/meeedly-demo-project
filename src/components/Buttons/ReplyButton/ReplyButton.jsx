import React, { useState } from 'react';
import styles from './replyButton.module.css';
import replyIcon from '@/assets/reply-svgrepo-com.svg'


function Reply() {
  const [text, setText] = useState('');


  const reply = () => {

  }

  return (
    <>
      <div className= {styles.buttonHolder}>
        <button className = {styles.replyButton}>
          <img src= { replyIcon }
            width = "13"
            height = "13"
            className = {styles.replyIcon }
          />
          <span> Reply</span>
        </button>
      </div>
    </>
  );
};


export default Reply;
