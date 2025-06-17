import React, { useState } from 'react';

function HandleDislike() {
    const [likes, setLikes] = useState(0);
    const [liked, setLiked] = useState(false)

    const handleClick = () => {
        if (liked) {
            setLikes(likes - 1);
        } else {
            setLikes(likes + 1);
        }
        setLiked(!liked);
    };

    return (
        <div>
          <button onClick={handleClick}>
          👎 {likes}
          </button>
        </div>
      );
}

export default HandleDislike;
