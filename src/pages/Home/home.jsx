import styles from './home.module.css';
import React, {useState} from 'react';
import CounterHandler from '@/Components/Buttons/CounterButtons/Counter';
import { Link } from 'react-router-dom';
import NavBar from '@/components/NavBar/navbar';


function Home() {
    const [count, setCount] = useState(0)

  return (
    <>
        <NavBar />
        <CounterHandler />
    </>
  );
}

export default Home;

