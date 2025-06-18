import { Link } from 'react-router-dom';
import { useState } from "react";
import styles from './about.module.css';
import NavBar from '../../components/NavBar/navbar';
import CommentFetcher from '../../Components/Comment/CommentFetcher';

function About() {
    return (
        <>
            <NavBar />
            <CommentFetcher />
        </>
    )
}

export default About;