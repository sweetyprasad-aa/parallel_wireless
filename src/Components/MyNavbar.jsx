import React from 'react'
import "./Navbar.css";
import {Link as RouterLink}  from "react-router-dom";
import logo from '../assets/images/parallel_wireless.jpg';
import {FaSearch} from 'react-icons/fa';

const MyNavbar = () => {
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
                  <ul className="navbar-nav mx-5"> 
                 
                    <RouterLink activeclassname="active"
                        to="/solution"
                        exact="true" className='nav-item'>Solutions
                    </RouterLink>
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
                
                    <RouterLink className='nav-item'><FaSearch  className='search'/>
                    </RouterLink>
                  
                  <RouterLink className='nav-item btn px-1 py-2'>Contact Us</RouterLink> 
                </ul>
                </div>
            </div>
        </nav>
  </>
}

export default MyNavbar