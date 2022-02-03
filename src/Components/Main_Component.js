import React from 'react';
import logo from '../logo.svg';
import '../App.css';
import Button from '../sharedComponents/Button';
import useDocumentTitle from '../CustomHooks/useDocumentTitle';
import ParentComponent from '../TreeComponent/ParentComponent';

import {useState,useEffect,useLayoutEffect,useCallback} from 'react';

function Main_Component() {
    const [Name,setName]=useState('g');
    const [count,setCount]=useState(0);

    const pullDataFunctionFromChild=(data) =>{
        console.log(data);
    }

    useEffect(() =>{
        console.log('Hello Name');
    },[Name]);

    useEffect(() =>{
        console.log('Hello count');
    },[count]);

    useLayoutEffect(() =>{
        console.log('Hello layout');
    },[]);

    const [age,setAge]=useState(25);
    const [salery,setSalery]=useState(1000);

    const increaseAge=useCallback(()=>{
        setAge(age+1);
    },[age])
    
    const increaseSalery = useCallback(()=>{
        setSalery(salery+1000)
    },[salery])   

    useDocumentTitle(Name)
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />  
                <p>{Name} with {count}</p>  
                <button onClick={()=>{console.log("Button clicked");setName("Button clicked")}}>clicked</button>
                <br/>
                <button onClick={()=>{console.log("Button next");setName("Button next")}}>clicked next</button> 
                <br/>
                <button onClick={()=>{console.log("increase counter");setCount(count+1)}}>increase counter</button> 
                <br/>
                <p>use call back example</p>
                <p>age is {age}</p>  
                <br/>
                <Button callFunction={increaseAge} pull_data={pullDataFunctionFromChild}>age counter</Button> 
                <br/>
                <p>salery is {salery}</p>  
                <br/>
                <Button callFunction={increaseSalery} >salery counter</Button> 
                <p>child to parent data pull</p>  
                <ParentComponent/>
            </header>
        </div>
    );
}

export default Main_Component;
