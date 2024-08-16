import React from 'react';
import { Route,Routes } from 'react-router';
import './App.css';
import FullPage from './Components/FullPage';


function App() {
  return (
    <div >
      <React.Fragment>
        <Routes>
          <Route path="/" element={<FullPage page={'home'} />}/>
          <Route path="/mainhome" element={<FullPage page={'home'}/>}/>
          <Route path="/productdets" element={<FullPage page={'pd'}/>}/>
          <Route path="/addproducts" element={<FullPage page={'ap'}/>}/>
          <Route path="/productdetails/:id" element={<FullPage page={'up'}/>}/>
          <Route path="/register" element={<FullPage page={'reg'}/>}/>
          <Route path="/login" element={<FullPage page={'log'}/>}/>
          <Route path="/conus" element={<FullPage page={'contus'}/>}/>
        </Routes>
      </React.Fragment>
  
    </div>
  );
}

export default App;
