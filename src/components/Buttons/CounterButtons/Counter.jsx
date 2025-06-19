import styles from './counter.module.css';
import React, {useState, useEffect} from 'react';

function CounterHandler() {
    const [count, setCount] = useState(0);
    const [showAchievement, setShowAchievement] = useState(false);
    const [achievementCount, setAchievementCount] = useState(0);
    const [nextMilestone, setNextMilestone] = useState(10)

    useEffect(() => {
        if (count == nextMilestone) {
        setAchievementCount(count);
        setNextMilestone(prev => prev * 10);
        setShowAchievement(true);
        setTimeout(() => setShowAchievement(false), 3000);
        }
    }, [count]);

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
        <div className = {styles.holder}>
          <h1>Count: {count}</h1>
          <div className = {styles.counterButtonHolder}>
              <button onClick={handleIncrease} className = {styles.increaseButton}>
                <p className= {styles.text}> + Increase </p>
              </button>

              <button onClick={handleDecrease} className = {styles.decreaseButton}>
                <p className= {styles.text}> - Decrease </p>
              </button>
          </div>

          {showAchievement && (
            <div className= {styles.achievementPopup}>
              🎉 Achievement Unlocked: Reached {achievementCount}!
            </div>
          )}
        </div>
    </>
  );
}

export default CounterHandler;

