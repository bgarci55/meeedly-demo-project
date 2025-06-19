import styles from './comment.module.css'
import tuna from '@/assets/person-2-svgrepo-com.svg'
import LikeDislike from '@/Components/Buttons/LikeButton/LikeButton';
import Reply from '@/components/Buttons/ReplyButton/ReplyButton';

function CommentHandler({title, body, likes, dislikes}) {

  return (
    <>
      <div className = {styles.container}>
        <div className= {styles.profile}>
          <img src = {tuna}
            width = "70"
            height = "70"
            className = {styles.profilePic}
          />
        </div>

        <div className = {styles.commentSection}>
          <div className= {styles.profile}>
            <div className = {styles.profileContents}>
              <h1> {title} </h1>
              <p className = {styles.timeStamp}> 2 hours ago </p>
            </div>
          </div>

          <p className = {styles.commentText}>
              {body}
          </p>
          
          <div className = {styles.likeSection}>
              <LikeDislike likes = {likes} dislikes = {dislikes} />
              <Reply />
          </div>
        </div>
      </div>
    </>
  );
}

export default CommentHandler;
