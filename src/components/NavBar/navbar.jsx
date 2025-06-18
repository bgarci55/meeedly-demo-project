import styles from './navbar.module.css';
import React, {useState} from 'react';
import CounterHandler from '@/Components/Buttons/CounterButtons/Counter';
import { Link } from 'react-router-dom';


function NavBar() {
    return (
    <>
        <nav>
            <h1> Countly </h1>
            <div className = {styles.navItems}>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/settings">Settings</Link>
            </div>
        </nav>
    </>
    );
}

export default NavBar;

