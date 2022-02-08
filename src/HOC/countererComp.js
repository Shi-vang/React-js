import React from 'react';

const CountererComp = ({counter,increaseCount}) => {
    return (
        <div>
            <p> count is {counter}</p>
            <button onClick={increaseCount}>click</button>
        </div>
    );
};

export default CountererComp;
