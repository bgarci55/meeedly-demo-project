import styles from './home.module.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';



function Home() {
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

        <div className="card">
          <h1> Count is {count} </h1>

          <button onClick={() => setCount((count) => count + 1)}>
            +
          </button>

          <button onClick={() => setCount((count) => count - 1)}>
            -
          </button>
        </div>
    </>
  );
}

export default Home;

