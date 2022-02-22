import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

function Products() {

    const [product, setproduct] = useState([])
    const [search, setSearch] = useState('')
    const [showFilter, setshowFilter] = useState(false)
    const [filteredTodos, setfilteredTodos] = useState([])


    useEffect(() => {
        fetchProducts()
    }, [])
    const fetchProducts = async()=>{
     try{
        const response = await axios.get('https://ty-shop.herokuapp.com/api/products')
        setproduct(response.data.products)
        console.log(response.data.products);
     }catch(err){
         console.log(err);
     }
    console.log('product',product);

    }

    const handleChange = (e)=>{
         setSearch(e.target.value)
    }

    console.log(search);

    useEffect(()=>{
        if(search !== undefined){
            if(search===''){
                setshowFilter(false)
            }else{
                 const productCopy = [...product]
                 const filteredProduct = productCopy.filter((prod)=>{
                        return prod.productName.includes(search )
                 })
                setshowFilter(true)
                setfilteredTodos(filteredProduct)
            }
        }

    },[search])



  return (
      <div>
      <div>
      <input type="" name="" placeholder='search' onChange={(e)=>{handleChange(e)}}/>
          
      </div>
          
    <Table striped bordered hover size="sm">
  <thead>
    <tr>
      <th>ID</th>
      <th>productName</th>
      <th>productPrice</th>
      <th>productDescription</th>
    </tr>
  </thead>
  <tbody>

  { !showFilter ?
      product.map((post)=>{
   return (
    <tr>
    <td>{post._id}</td>
    <td>{post.productName}</td>
    <td>{post.productPrice}</td>
    <td>{post.productDescription}</td>
  </tr>
   )
      }) :  filteredTodos.map((post)=>{
        return (
         <tr>
         <td>{post._id}</td>
         <td>{post.productName}</td>
         <td>{post.productPrice}</td>
         <td>{post.productDescription}</td>
       </tr>
        )
           })
  }
       
  </tbody>
</Table>
</div>

  )
}

export default Products