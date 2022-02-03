import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'
import {actionCreatorForBuyCake} from '../Redux/Cake/ActionCreator'
const  Main_page=(props) =>{
  return (
      <>
      <h1>Welcome</h1>
      <p>number of cakes {props.numberOfCakes}</p>
      <button onClick={props.buyCake}>Buy cake</button>
        
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