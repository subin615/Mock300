import "./CartItem.scss";
import React, { useContext, useState } from "react";
import { Paper } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import Contexts from "../../Context/ContextApi";

function CartItem(props) {
  const { image, price, name, count } = props.value;
  const { products, cart, setCart, num, setNum } = useContext(Contexts);
  console.log(cart);

  //  let num;
  // console.log(image,price,name);
  const increment = () => {
    //  const increase;
    if(num>=0){
      setNum(num + 1);
    }
  };
  const decrement = () => {
if(num>0){
   setNum(num - 1);
}};

  return (
    <div className="card paper">
      <div className="row cartitem">
        {/* <div className="thu"> */}
        <div className="col-4 p-0">
          <img
            height="170px"
            width="275px"
            // object-fit="contain"
            src={image}
          />
        </div>
        {/* </div>
        <div> */}
        <div className="col-6 p-2">
          <h3>{name}</h3>
          <h2>${price}</h2>
        </div>
        {/* </div>
        <div> */}
        <div className="col-2 m-auto" >
          <div className="row counter">
            <button onClick={decrement}>-</button>
            <p>{num}</p>
            <button onClick={increment}> + </button>
          </div>
          <DeleteForeverIcon 
            sx={{ fontSize: "xxx-large", margin: "25px 45px" }}
          />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
}

export default CartItem;
