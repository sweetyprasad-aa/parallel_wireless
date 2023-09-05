import React, {useState} from 'react';
import './Navbar.css';
import {Link} from 'react-scroll';
import {Link as RouterLink } from 'react-router-dom';
import logo from '../assets/images/parallel_wireless.jpg';
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
    // solution dropdown
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

//    products dropdown
   const[productopen, setProduct] = useState(false)

   const productshandleToggle = ()=>{
    setProduct(!productopen);
   };

   const productshandleMouseEnter = ()=>{
    setProduct(true);
   };

   const productshandleMouseLeave = ()=>{
    setProduct(false);
   }

  return (
    <>
        <nav className="navbar navbar-expand-sm navbar">
            <div className="container-fluid navbarContainer">
              <RouterLink className="navbar-brand" to='/'><img src={logo} alt='logo' className='logoImg'/>
              </RouterLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                <ul className="navbar-nav">
                    <RouterLink to="/solution" exact="true" activeclassname="active" className="a dropdown nav-item" onMouseOver={solutionshandleMouseEnter} onMouseLeave={solutionshandleMouseLeave}>
                      <div className="dropdown-toggle " data-bs-toggle="dropdown"
                          onClick={solutionshandleToggle}>Solutions</div>
                        <ul className={`dropdown-menu productsTech-main ${solutionopen ? 'show' : ''}`}>
                            <li><a className="dropdown-item" href="/urban">Urban</a></li>
                            <li><a className="dropdown-item" href="/rural">Rural</a></li>
                            <li><a className="dropdown-item" href="/private">Private ITE</a></li>
                        </ul>   
                    </RouterLink>

                    <RouterLink activeclassname="active" to="/product" exact="true"
                    className="dropdown nav-item" onMouseOver={productshandleMouseEnter} onMouseLeave={productshandleMouseLeave}>
                    <div className="dropdown-toggle custom-dropdown-toggle" 
                          onClick={productshandleToggle}>Products & Technologies
                    </div>
                        <div className={`dropdown-menu productsTech  ${productopen ? 'show' : ''}`}>
                            <div className="container p-4">
                                <div className="row">
                                <div className="col-md-2">
                                <h5 className="b-text"> <Link className='text-deco' to="/products-technologies/page-technologies">Technologiess</Link></h5>
                                    <p><Link className='text-deco' to="/products-technologies/technologies/5G">5G</Link></p>
                                    <p><Link className='text-deco' to="/products-technologies/technologies/4G">4G</Link></p>
                                    <p><Link className='text-deco' to="/products-technologies/technologies/3G">3G</Link></p>
                                    <p><Link className='text-deco' to="/products-technologies/technologies/2G">2G</Link></p>
                                </div>
                                <div className="col-md-3">
                                    <h4 className="b-text">Products</h4>
                                    <h6 className='b-text'>ACCESS : OpenRAN</h6>
                                    <p>Software-defined Open</p>
                                    <p>vRAN</p>
                                    <p>5G OpenRAN</p>
                                </div>
                                <div className="col-md-2">
                                    <h6 className="b-text">Network Software</h6>
                                    <p>Interoperable</p>
                                    <p>Unified</p>
                                    <p>Cloud-native</p>
                                    <p>End-to-end</p>
                                    <p>Performance</p>
                                    <p>Multi-tenant and sharing</p>
                                    <p>Secure</p>
                                </div>
                                <div className="col-md-2">
                                    <h6 className="b-text">Network Intelligence</h6>
                                    <p>Analytics</p>
                                    <p>Real-Time ALL G SON</p>
                                    <p>Network Orchestrator</p>
                                </div>  
                                <div className="col-md-3">
                                    <div className='drop-main'>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3VGft6mvNYOiHHZKGCv8myBvcHShLw3GDD-gvLiUH&s" width={"100%"} alt="" />
                                        <div className='drop-inside'>
                                            <h5 className="b-text text-inside">Visit our resources page to download collateral, watch customer testimonial, or get a spec sheet.</h5>
                                            <h6 className="b-text text-inside">RESOURCES</h6>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
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
  )
}

export default Navbar;
