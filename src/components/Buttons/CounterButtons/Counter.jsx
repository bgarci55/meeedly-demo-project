import styles from './counter.module.css';
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
        <div>
          <h1> Count is {count} </h1>

          <div className = {styles.counterButtonHolder}>
            <button onClick={handleIncrease} className = {styles.counterButton}>
              <span> + </span>
            </button>

            <button onClick={handleDecrease} className = {styles.counterButton}>
              <span> - </span>
            </button>
          </div>
        </div>
    </>
  );
}

export default CounterHandler;

