import "./Products.scss";
import React, { useContext } from "react";
import Contexts from "../../Context/ContextApi";
import { Paper } from "@mui/material";

function Products(props) {
  // const {cart,setCart}=
  const { products, cart, setCart } = useContext(Contexts);

  // console.log(products);

  const addtoCart = (item) => {
    let cartCopy = [...cart];

    cartCopy.push(item);
    console.log(cartCopy);
    setCart(cartCopy);
  };
  // console.log(cart);
  const paperStyle = {
    color: "#FF4500",
    padding: "15px",
    width: "95%",
    backgroundColor: "lightblue",
    margin: "25px 25px 25px 25px",
  };

  return (
    <Paper sx={paperStyle}>
      {products.map((item, i) => {
        return (
          <div>
            <h1>{item.name}</h1>
            <h3>{item.price}</h3>
            <button
              onClick={() => {
                addtoCart(item);
              }}
            >
              Add to
            </button>
          </div>
        );
      })}
    </Paper>
  );
}

export default Products;
