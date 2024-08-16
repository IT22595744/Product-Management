import React, { useState } from 'react';

import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './login.css'

function Login() {
    const history=useNavigate();
    const [user,setUser]=useState({
     name:"",
     gmail:"",
     
    });
 
    const handleInputChange=(e)=>{
     const {name,value}=e.target;
     setUser((prevUser) =>({...prevUser,[name]:value}))
    };
 
    const handleSubmit=async(e)=>{
     e.preventDefault();
 
    try{
        const response = await sendRequest();
        if (response.status === "ok"){
            alert("login Success");
            history("/productdetails");
        }else{
            alert("Login error");
        }
    }catch(err){
        alert("error"+err.message);
    }
    };
 
    const sendRequest=async()=>{
     return await axios
     .post("http://localhost:5000/login",{
        
         gmail:user.gmail,
         password:user.password,
     })
     .then((res)=>res.data)
    }
   
  return (
    <div className='bg'>
    
    <div className='form_2'>
        <br></br><br></br>
     <h1>User Login</h1>
     
     <form onSubmit={handleSubmit}>
      <label className='lab' >Gmail</label><br></br>
      <input type='email'  className='field' value={user.gmail} onChange={handleInputChange} name='gmail' required></input><br></br>
       
      <br></br><br></br>
      <label className='lab'>Password</label><br></br>
      <input type='password' className='field' value={user.password} onChange={handleInputChange}  name='password' required></input><br></br><br></br>
      <button  className='submit-style'>Login</button>
     </form>
     </div>
  </div>
  );
}

export default Login;
