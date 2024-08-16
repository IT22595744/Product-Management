import React,{useState} from 'react';
import './Addproduct.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function AddProduct() {
      //user inputs setting the inputs 
  const history=useNavigate();
  const [inputs,setInputs]=useState({
    //below name should used same as name as input name in the form
    name:"",
    supplier:"",
    date:"",
    address:"",

  });
    //implementing a function what should happen when make inputs and submit
    const handleChange=(e)=>{
        setInputs((prevState)=>({
          ...prevState,
          [e.target.name]:e.target.value,
        }));
      };

    //after where should navigate,url related function
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=>history('/productdetails'))
  }

    //implementing the sendrequest function from above
    const sendRequest=async()=>{
        await axios.post("http://localhost:5000/products",{
          //module attribute name=name
          name:String(inputs.name),
          supplier:String(inputs.supplier),
          date:Date(inputs.date),
          address:String(inputs.address),
      
        }).then(res=>res.data);
      }
    return (
    <div className='bg'>
      <div className='form_1'>
      <h1>Add Products</h1>
      <form onSubmit={handleSubmit}>
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
    </div>
  );
}

export default AddProduct;
