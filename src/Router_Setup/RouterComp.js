import React from 'react';
import {Routes,Route} from 'react-router-dom'
import Main_page from '../Components/Main_page'
import About from '../Components/About'
import Cart from '../Components/Cart'
import Orders from '../Components/Orders';

export default function RouterComp() {
  return (
  <Routes>
      <Route path="/" element={<Main_page/>}/>
      <Route path="About" element={<About/>}/>
      <Route path="cart" element={<Cart/>}/>
      <Route path="Orders" element={<Orders/>}>
          <Route path="About" element={<About/>}/>
          <Route path=""/>
          <Route path=""/>
      </Route>
      <Route path="*" element={<p>no match found</p>}/>
  </Routes>
  );
}
