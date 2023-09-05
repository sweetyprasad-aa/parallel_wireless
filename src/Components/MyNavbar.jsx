import React, { useState } from 'react'
import "./Navbar.css";
import {Link as RouterLink}  from "react-router-dom";
import logo from '../assets/images/parallel_wireless.jpg';

const MyNavbar = () => {
    const[solutionopen, setSolution] = useState(false)

    const solutionshandleToggle = ()=>{
     setSolution(!solutionopen);
    };
 
    const solutionshandleMouseEnter = ()=>{
     setSolution(true);
    };
 
    const solutionshandleMouseLeave = ()=>{
     setSolution(false);
    }
  return <>
    <nav className="navbar navbar-expand-sm navbar">
            <div className="container-fluid navbarContainer">
              <RouterLink className="navbar-brand" to='/'>
                <img src={logo} alt='logo' className='logoImg'/>
              </RouterLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <div className="navbar-nav">
                    <RouterLink to="/solution" exact="true" activeclassname="active" className="a dropdown nav-item" onMouseOver={solutionshandleMouseEnter} onMouseLeave={solutionshandleMouseLeave}>
                      <div className="dropdown-toggle custom-dropdown-toggle" 
                          onClick={solutionshandleToggle}>Solutions</div>
                        <ul className={`dropdown-menu productsTech-main ${solutionopen ? 'show' : ''}`}>
                            <li><a className="dropdown-item" href="/urban">Urban</a></li>
                            <li><a className="dropdown-item" href="/rural">Rural</a></li>
                            <li><a className="dropdown-item" href="/private">Private ITE</a></li>
                        </ul>
                    </RouterLink>
                    </div>
                    <RouterLink activeclassname="active"
                        to="/product"
                        exact="true" className='nav-item'>Products & Technologies
                    </RouterLink>

                    <RouterLink activeclassname="active"
                        to="/customer"
                        exact="true" className='nav-item'>Customers</RouterLink>
                
                    <RouterLink activeclassname="active"
                        to="/company"
                        exact="true" className='nav-item'>Company</RouterLink>
                  
                    <RouterLink activeclassname="active"
                        to="/career"
                        exact="true" className='nav-item'>Careers
                    </RouterLink>
          
                    <RouterLink activeclassname="active"
                        to="/resource"
                        exact="true" className='nav-item'>Resources</RouterLink>
                
                    {/* <RouterLink className='nav-item'><FaSearch  className='search'/>
                    </RouterLink>
                   */}
                  <RouterLink className='nav-item btn px-1 py-2'>Contact Us</RouterLink> 

                </div>
            </div>
        </nav>
  </>
}

export default MyNavbar