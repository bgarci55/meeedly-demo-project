import styles from './Pages/home.module.css';
import React, {useState} from 'react';



function CounterHandler() {
    const [count, setCount] = useState(0)

    const handleIncrease = () => {
        setCount(count + 1);
    }

    const handleDecrease = () => {
        if(count != 0){
            setCount(count - 1);
        }
    }


  return (
    <>
        <div className="card">
          <h1> Count is {count} </h1>

          <button onClick={handleIncrease} className = {styles.counterButton}>
            +
          </button>

          <button onClick={handleDecrease} className = {styles.counterButton}>
            -
          </button>
        </div>
    </>
  );
}

export default CounterHandler;

