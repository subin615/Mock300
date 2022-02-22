import "./Cart.scss";
import React, { useContext, useState } from "react";
import { Paper } from "@mui/material";
import CartItem from "./CartItem";
import Contexts from "../../Context/ContextApi";
const paperStyle = {
  color: "#FF4500",
  padding: "15px",
  width: "95%",
  backgroundColor: "lightblue",
  margin: "25px 25px 25px 25px",
};

function Cart() {
  const { products, cart, setCart } = useContext(Contexts);

  // const [product, setproduct] = useState(products)
  return (
    <div>
      <Paper sx={paperStyle}>
        <h1>Checkout</h1>
        <hr color="grey" />
        <h3>User Name</h3>
        {cart.map((val, index) => {
          return <CartItem value={val}  />;
        })}
        {/* <CartItem /> */}
      </Paper>
    </div>
  );
}
export default Cart;
