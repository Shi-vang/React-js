import React from 'react';
import CounterComponent from './counterComponent'
import CountererComp from './countererComp'
const Counterer2Comp = () => {

    const HocComp=CounterComponent(CountererComp)
    const HocComp2ForSameComp=CounterComponent(CountererComp)

    return (
        <div>
            <p>count</p>
            <input type="text"></input>
            <button>click</button>
        {HocComp}
        {HocComp2ForSameComp} 
        </div>
    )
};

export default Counterer2Comp;
