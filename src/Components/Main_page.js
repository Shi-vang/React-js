import React,{useState,useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux'
import {actionCreatorForBuyCake} from '../Redux/Cake/ActionCreator'
const  Main_page=(props) =>{

  const navigate = useNavigate()
  const [a,setA]=useState(0)
  const [b,setB]=useState(0)

  const funcc=()=>{
    setB(b+1)
    console.log("dcerff",b)
  }

  useEffect(() =>{
    console.log('Hello use effect call ')

    return (()=>{
      console.log("component will unmount call")
    })
  },[])

  return (
      <>
      <h1>Welcome</h1>
      <p>number of cakes {props.numberOfCakes}</p>
      <button onClick={props.buyCake}>Buy cake</button>
      <button onClick={()=>{setA(props.numberOfCakes);funcc()}}>Buy {a}</button>
      <button onClick={()=>navigate('/cart')}>nav to cart</button>
      </>
  );
}

const mapPropsToSate =(state)=>{
  return{
    numberOfCakes:state.numberOfCakes
  }
}

const mapPropsToAction =dispatch=>{
  return {
    buyCake: ()=>{
      dispatch(actionCreatorForBuyCake())
    }
  }
}

export default connect(mapPropsToSate,mapPropsToAction)(Main_page)