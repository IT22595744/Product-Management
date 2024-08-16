import React, { useEffect, useState } from 'react';
import Nav from './Nav/Nav';
import Home from './Home/Home';
import AddProduct from './AddProduct/AddProduct';
import Products from './ProductDetails/Products';
import UpdateProduct from './UpdateProduct/UpdateProduct';
import Register from './Register/Register';
import Login from './Login/Login';
import Contactus from './Contactus/Contactus';


export default function FullPage({page}) {

    const [loadingPage, setLoadingPage] = useState(<Home/>);

    useEffect(()=>{
        if(page === 'home'){
            setLoadingPage(<Home/>);
        }else if(page === 'home'){
            setLoadingPage(<Home/>)
        }else if(page === 'pd')
        {
            setLoadingPage(<Products/>)
        }else if(page === 'ap'){
            setLoadingPage(<AddProduct/>)
        }else if(page === 'up'){
          setLoadingPage(<UpdateProduct/>)
      }else if(page === 'reg'){
        setLoadingPage(<Register/>)
    }else if(page === 'log'){
      setLoadingPage(<Login/>)
  }else if(page === 'contus'){
    setLoadingPage(<Contactus/>)
}
    },[page])
    

  return (
    <div style={{display:'flex', flex:1}}>
      <div style={{display:'flex', flex: 0.2}}>
    <Nav/>
      </div>
      <div style={{display:'flex', flex: 0.8}}>
        {loadingPage}
      </div>
    </div>
  );
}
