import React from 'react'
import { NavLink } from 'react-router-dom';
import Data from './Data'


const Products = () => {
  const cardItems = (item) => {
    return (
      <div className="card m-4" key={item.id} style={{width:"17rem"}}>
        <img src={item.image} className="card-img-top" alt={item.title} />
        <div className="card-body text-center">
          <h5 className="card-title ">{item.title}</h5>
          <p className='lead'>{item.price}</p>
          <NavLink to={`/products/${item.id}`} className="btn btn-outline-primary ">Buy Now</NavLink>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className='container py-5'>
        <div className='row justify-content-around'>
          <div className='col-12 text-center'>
            <h1>Products</h1>
            <hr /> 
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          {Data.map(cardItems)}
        </div>
      </div>
    </div>
  )
}

export default Products