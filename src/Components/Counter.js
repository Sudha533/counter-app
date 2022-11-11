import React from 'react';
import { useState } from 'react';
import './Counter.css';

const Counter = (props) => {
    const [count, setcountValue] = useState(0);
    const [multiply, setMultiply] = useState(1);
    console.log(count);
    return (
    <div className='container'>
    <div className="counter-container">
        <h1 className='displayCount'>{count}</h1>
    </div>
    <div className='button-container'>
        <button className="greenBtn" onClick = {()=>{setcountValue(count+1)}}>+</button>
        <button className='resetBtn' onClick = {()=>setcountValue(0)}>Reset</button>
        <button className="redBtn"onClick = {()=>setcountValue(count-1)}>-</button>
    </div>
    </div>
    );
};

export default Counter;