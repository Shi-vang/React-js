import React from 'react';
import {useNavigate} from 'react-router-dom'

function Cart() {
    const navigation=useNavigate();



  return (
      <>
        <h1>Cart</h1>
        <ul>
            <li>product 1</li>
            <li>product 2</li>
            <li>product 3</li>
            <li>product 4</li>
            <li>product 5</li>
        </ul>
        <button onClick={()=>{navigation(-1)}}>Go to back</button>
        <button onClick={()=>{navigation('/Orders'+"iuyfthcgxchjuigyhcfghjbku")}}>Go to orders</button>
      </>
  );
}

export default Cart;
