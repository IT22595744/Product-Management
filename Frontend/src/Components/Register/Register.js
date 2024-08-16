import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './register.css';

function Register() {
    const history=useNavigate();
    const [user,setUser]=useState({
     name:"",
     gmail:"",
     password:"",
    });
 
    const handleInputChange=(e)=>{
     const {name,value}=e.target;
     setUser((prevUser) =>({...prevUser,[name]:value}))
    };
 
    const handleSubmit=(e)=>{
     e.preventDefault();
 
     sendRequest().then(()=>{
       alert("Register Success");
       history("/productdetails");
     })
     .catch((err)=>{
         alert(err.message);
     });
    };
 
    const sendRequest=async()=>{
     await axios.post("http://localhost:5000/register",{
         name:String(user.name),
         gmail:String(user.gmail),
         password:String(user.password),
     })
     .then((res)=>res.data)
    }
  return (
    <div className='bg'>
    
    <div className='form_1'>
      <br></br><br></br><br></br>
     <h1>User Register</h1>
     <form onSubmit={handleSubmit}>
      <label className='lab'>Name</label><br></br>
      <input type='text' className='field' value={user.name} onChange={handleInputChange} name='name' required></input><br></br><br></br>
      <label className='lab'>Gmail</label><br></br>
      <input type='email' className='field'  value={user.gmail} onChange={handleInputChange} name='gmail' required></input><br></br><br></br>
      <label className='lab'>Password</label><br></br>
      <input type='password' className='field' value={user.password} onChange={handleInputChange}  name='password' required></input><br></br><br></br>
      <button className='submit-style'>Register</button>
     </form>
     </div>
  </div>
  );
}

export default Register;
