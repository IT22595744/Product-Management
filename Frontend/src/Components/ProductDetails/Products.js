import React, { useState,useEffect,useRef } from 'react';
import './Productdetails.css';
import axios from "axios";
import Product from "../Product/Product";
import {useReactToPrint} from "react-to-print";
const URL="http://localhost:5000/products";



const fetchHandler=async()=>{
  return await axios.get(URL).then((res) => res.data);
}
function Products() {
   
  const [products,setProducts]=useState([]);
  useEffect(()=>{
    console.log("abc")
    fetchHandler().then((data)=>{
      console.log("data",data)
      setProducts(data.product)
    })
    .catch((e) => console.log(e));
  },[])
  
   //implementing the downloading report function
   const ComponentsRef=useRef();
   const handleprint=useReactToPrint({
     content:()=>ComponentsRef.current,
     //the report will be downloaded in this title
     DocumentTitle:"Users Report",
     //after report downloaded displaying alert msg
     onafterprint:()=>alert("Users Report Successfully Download !"),
   }) ;
 
   //implementing the search functions
   const [searchQuery,setSearchQuery]=useState("");
   const [noResults,setNoResults]=useState(false);
 
   const handlesearch=()=>{
       fetchHandler().then((data) => {
         const filteredUsers = data.product.filter((product)=>
           Object.values(product).some((field)=>
           field.toString().toLowerCase().includes(searchQuery.toLowerCase())  
           ))
           setProducts(filteredUsers);
           setNoResults(filteredUsers.length === 0)
       });
    }

    const handlesendReport=()=>{
      //create the whatsapp chat url
      const phonenumber="+94770285277";
      const message=`selected User Reports`
      const WhatsAppUrl=`https://web.whatsapp.com/send?phone=${phonenumber}&text=${encodeURIComponent(
      message)}`;
  
      //open the whatsapp chat in new window
      window.open(WhatsAppUrl,"_blank");
     }
 return (
    <div className="bg2">
      <h1 className='p1'>Product Details Display Page</h1>
      <input className="search" onChange={(e) => setSearchQuery(e.target.value)}
             type='text'
             name='search'
             placeholder='search user details'></input>

       <button className="btn1" onClick={handlesearch}>Search</button>
       {noResults ?(
        <div>
          <p>No Users Found</p>
          </div>
      ):(
      <div ref={ComponentsRef}>
      {products && products.map((product,i)=>{
       
        return (
        <div key={i}>
          <Product product={product}/>
      </div>
    )})}
    </div>
      )}
    <button className="btn2" onClick={handleprint}>Download Report</button><br></br>
    <button className="btn3" onClick={handlesendReport}>Send Whatsapp Message</button>
    </div>
  );
}

export default Products;
