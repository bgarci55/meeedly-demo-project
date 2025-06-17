import styles from './home.module.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import CounterHandler from '../CounterButton';



function Home() {
    const [count, setCount] = useState(0)

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

        <div>
          <CounterHandler className = {styles.counterButton}/>
        </div>
    </>
  );
}

export default Home;

