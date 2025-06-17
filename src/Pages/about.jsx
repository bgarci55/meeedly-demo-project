import { Link } from 'react-router-dom';
import { useState } from "react";
import styles from './about.module.css';
import LikeDislike from '../LikeButton';
import CommentHandler from '../CommentThread';
import Reply from '../ReplyButton'


function About() {
    const [count, setCount] = useState(0)

    return (
        <>
            <nav>
                <h1> Countly </h1>
                <div className= {styles.navItems}>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/settings">Settings</Link>
                </div>
            </nav>

            <h1> About Page </h1>

            <CommentHandler className = {styles.commentSection}/>
            

        </>
    )
}

export default About;