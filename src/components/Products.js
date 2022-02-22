import axios from 'axios'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import EditProduct from './EditProduct';

function Products() {
    const [products, setproducts] = useState([])
    const [showEditProduct, setshowEditProduct] = useState(false)
    const [selectedProduct, setselectedProduct] = useState({
        productName:'',
        productPrice:'',
        productDescription:''

    })
    

    const fetchProducts=async()=>{
        const url = 'https://ty-shop.herokuapp.com/api/products'
        try{

            const response = await axios.get(url)
            const data = await response.data
            setproducts(data.products)
            console.log(data.products);

        }catch(err){
            console.log(err);
        }
  console.log(products);

    }

    const  editProducts=(product)=>{
        setselectedProduct(product)
        setshowEditProduct(true)
    }
    
  return (
    <div>
<button onClick={fetchProducts}>fetch</button>

<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Product Name</th>
      <th scope="col">Product Price</th>
      <th scope="col">Description</th>


    </tr>
  </thead>
  <tbody>
      {
          products.map((product)=>{
    return <tr key={product._id}>
      <td>{product._id}</td>
      <td>{product.productName}</td>
      <td>{product.productPrice}</td>
      <td>{product.productDescription}</td>
      <td><button onClick={()=>{
          editProducts(product)
      }}>Edit</button></td>
    </tr>
          })
      }
    
  </tbody>
</table>

<EditProduct
showEditProduct={showEditProduct}
setshowEditProduct={setshowEditProduct}
fetchProducts={fetchProducts}
selectedProduct={selectedProduct}

/>
    </div>
  )
}

export default Products