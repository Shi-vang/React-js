import React, {useState} from 'react';

const CounterComponent = (OriginalComponent) => {

    const [count,setCount]=useState(0);

    const incrementCounter=()=>{
        setCount(count+1);
    }

    return (
            <OriginalComponent counter={count} increaseCount={incrementCounter}/>
    )
};


export default CounterComponent;
