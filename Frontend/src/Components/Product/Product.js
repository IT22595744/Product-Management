import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

function Product(props) {
    const {_id,name,supplier,date,address} =props.product ;

    const history=useNavigate();

    const deleteHandler=async()=>{
      await axios.delete(`http://localhost:5000/products/${_id}`)
      .then(res=>res.data)
      .then(()=>history("/"))
      .then(()=>history("/productdetails"))
    }
  return (
    <div className=''>
          <h1 className='u1'>Product Display</h1>
      
      <h2>ID:{_id}</h2>
      <h2>Name:{name}</h2>
      <h2>Supplier:{supplier}</h2>
      <h2>Date:{date}</h2>
      <h2>Address:{address}</h2>
      <button className='bt1'>
      <Link to={`/productdetails/${_id}`} className='link'>Update</Link>
      </button>
      <button onClick={deleteHandler} className='bt1'>Delete</button>
    </div>
  );
}

export default Product;
