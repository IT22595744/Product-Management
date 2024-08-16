import React from 'react';
import './Nav.css'
// import { Link } from 'react-router-dom';
import logo from './product.png'; 
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div className='sidebar'>
           <div className="profile">
           <img  src={logo} alt='logo'></img>
            
        </div>
        
        <ul>
            <li><Link to="/mainhome" className="link_a">Dashboard</Link></li>
            <li><Link to="/addproducts" className="link_a"> Add Products</Link></li>
            <li><Link to="/productdets" className="link_a"> Product Details</Link></li>
            <li><Link to="/conus" className="link_a"> Contact Us</Link></li>
            <li><Link to="/register" className="link_a"> Register</Link></li>
            <li><Link to="/login" className="link_a"> Login</Link></li>
         
        </ul>
    </div>
    
  );
}

export default Nav;
