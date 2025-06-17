import { Link } from 'react-router-dom';
import { useState } from "react";
import styles from './about.module.css';
import HandleLike from '../LikeButton'
import HandleDislike from '../DislikeButton'

function About() {
    const [count, setCount] = useState(0)

    return (
        <>
            <nav>
                <h1> Countly </h1>
                <div className='nav-items'>
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/settings">Settings</Link>
                </div>
            </nav>

            <h1> About Page </h1>

            <div class = {styles.likeSection}>
                <HandleLike />
                <HandleDislike />
            </div>
        </>
    )
}

export default About;