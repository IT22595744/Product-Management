import React,{ useEffect, useState } from 'react';
import axios from 'axios';
import {useParams} from 'react-router';
import {useNavigate} from 'react-router-dom';

function UpdateProduct() {
   const[inputs,setInputs]=useState({});
    const history=useNavigate();
    const id=useParams().id;

    useEffect(()=>{
      if(id){
        const fetchHandler=async()=>{
            await axios
            .get(`http://localhost:5000/products/${id}`)
            .then((res)=>res.data)
            .then((data)=>setInputs(data.product))
        };
        fetchHandler();
      }
    },[id]);
    

    //implementin the sendrequest function from above
    const sendRequest=async()=>{
      console.log("id",id,inputs.date);
      const body = {
        name:String(inputs.name),
        supplier:String(inputs.supplier),
        date:inputs.date,
        address:String(inputs.address),
    
      };
      console.log('body',body)
        await axios 
        .put(`http://localhost:5000/products/${id}`,body);

      console.log('rrr')
    };

    //implementing a function what should happen when make inputs and submit 
    const handleChange=(e)=>{
        setInputs((prevState)=>({
          ...prevState,
          [e.target.name]:e.target.value,
        }));
      };
      
      //after where should navigate,url related function
      const handleSubmit=async(e)=>{
        e.preventDefault();
        console.log(inputs);
        sendRequest().then(()=>{
          console.log("ttt")
          history('/productdets')});
      };
  return (
    <div className='bg'>
       <h1>Update productdetails</h1>
      <form className='.form_1' onSubmit={handleSubmit}>
      <label className='lab'>Name</label><br/>
        <input type="text" className='field' name="name" onChange={handleChange} value={inputs.name} required></input>
        <br></br>
        <br></br>
        <label className='lab'>Supplier</label><br/>
        <input type="text" className='field' name="supplier" onChange={handleChange} value={inputs.supplier} required></input>
        <br></br>
        <br></br>
        <label className='lab'>Date</label><br/>
        <input type="date" className='field' name="date" onChange={handleChange} value={inputs.date} required></input>
        <br></br>
        <br></br>
        <label className='lab'>Address</label><br/>
        <input type="text" className='field' name="address" onChange={handleChange} value={inputs.address} required></input>
        <br></br>
        <br></br>
        
       <button className='submit-style'>Submit</button>
       </form> 
    </div>
  );
}

export default UpdateProduct;
