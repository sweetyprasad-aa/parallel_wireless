import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
// import Navbar from './Components/Navbar';
import Home from './Components/Home/Home';
import Footer from "./Components/Footer";
import Solution from "./Components/Solutions/Solution";
import Product from "./Components/Products/Product";
import Resource from "./Components/Resouces/Resource";
import Customer from "./Components/Customers/Customer";
import Company from "./Components/Company/Company";
import Career from "./Components/Careers/Career";
import MyNavbar from "./Components/MyNavbar";

const App = ()=>{
  return(
    <>
      {/* <Navbar /> */}
      <MyNavbar/>
     <Routes>
        <Route path="/" element ={<Home/>} /> 
        <Route path="/solution" element={<Solution/>} />
        <Route path='/product' element={<Product/>} /> 
        <Route path='/customer' element={<Customer/>} />
        <Route path='/company' element={<Company/>} />
        <Route path='/career' element={<Career/>} />
        <Route path='/resource' element={<Resource/>} /> 
      </Routes>
       <Footer/>
        
    </>
  )
}

export default App;