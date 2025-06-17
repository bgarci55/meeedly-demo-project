import React, { useState } from 'react';
import styles from './Pages/about.module.css';


function Reply() {
  const [text, setText] = useState('');


  const reply = () => {

  }

  return (
    <>
      <div className = {styles.replySection}>
        <button className = {styles.likeButtons}>
          Reply
        </button>
      </div>
    </>
  );
};


export default Reply;
