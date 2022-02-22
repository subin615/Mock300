import { useContext, useState } from "react";
import "./App.scss";
import CorouselBar from "./comps/Corousel/CorouselBar";
import NavBar from "./comps/NavBar/NavBar";
import Products from "./comps/Products/Products";
import Contexts from "../src/Context/ContextApi";
import Cart from "./comps/Cart/Cart";
function App() {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState([
    {
      name: "chair",
      image: "https://m.media-amazon.com/images/I/9149y4AZZ9L._SX425_.jpg",
      price: 250,
      id: 0,
      count: 0,
    },
    {
      name: "table",
      image:
        "https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      price: 290,
      id: 1,
      count: 0,
    },
    {
      name: "bed",
      image: "https://m.media-amazon.com/images/I/9149y4AZZ9L._SX425_.jpg",
      price: 50,
      id: 2,
      count: 0,
    },
    {
      name: "sofa",
      image: "https://m.media-amazon.com/images/I/9149y4AZZ9L._SX425_.jpg",
      price: 90,
      id: 3,
      count: 0,
    },
  ]);
  const [cart, setCart] = useState([]);
 const [num, setNum] = useState(0);

  // const MyContext=useContext(Contexts)
  const store = {
    data,
    setData,
    products,
    setProducts,
    cart,
    setCart,
    num,
    setNum,
  };
  return (
    <Contexts.Provider value={store}>
      <div className="App">
        <NavBar />
        {/* <CorouselBar /> */}
        <Products />
        <Cart />
      </div>
    </Contexts.Provider>
  );
}

export default App;
