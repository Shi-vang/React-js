import React from 'react';
import {useNavigate} from 'react-router-dom';
import {connect} from 'react-redux'
import {actionCreatorForBuyCake} from '../Redux/Cake/ActionCreator'
const  Main_page=(props) =>{

  const navigate = useNavigate()

  return (
      <>
      <h1>Welcome</h1>
      <p>number of cakes {props.numberOfCakes}</p>
      <button onClick={props.buyCake}>Buy cake</button>
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