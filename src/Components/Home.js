import React from "react";

import Product from "./Product";
import { useSelector } from "react-redux";

const Home = () => {

  let state=useSelector((state)=>state);
  return (
    <div>{
    state.map((ele,index)=>{
     return  <Product key={index} data={ele}></Product>
    })}
    </div>
  );
};

export default Home;
