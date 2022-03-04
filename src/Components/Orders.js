import React from 'react';
import {Link, Outlet, useParams} from 'react-router-dom'
function Orders(props) {

  const data = useParams()
  const PassedData = data.ParamsData;

  return (
    <>
    <h1>Orders</h1>
    <p>{PassedData}</p>
    <ul>
        <li>product 1</li>
        <li>product 2</li>
        <li>product 3</li>
        <li>product 4</li>
        <li>product 5</li>
    </ul>
    <navbar>
            <Link to='About'>Track Orders</Link>
            <br/>
            <Link to='cart'>Similar Orders</Link>
            <br/>
            <Link to='Orders'>Dlivered Orders</Link>
        </navbar>
        <Outlet/>
  </>
  );
}

export default Orders;
