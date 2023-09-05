import React from "react";
import './Company.css';
import {Link} from 'react-scroll';
import CampanyImg1 from '../../assets/images/leadership-image.jpg';
import CampanyImg2 from '../../assets/images/parallel-reimagine.jpg';
import {BsArrowRight} from 'react-icons/bs';
 
const Company = ()=>{
    return(
        <>

            <div className="CombgImg hero-inner">
                <div className='main-heading'>
                    <h1 className='Solheading'>Company</h1> 
                </div>
                </div>

                <div className="container mb-4">
                <div className='content'>
                    <h1 className='text-center'>About Us</h1>
                    <p className='para mt-2'>Parallel Wireless created world’s only 5G 4G 3G 2G <span className='color-t'>OpenRAN</span>  architecture to make delivery of wireless <span className='color-t'> coverage</span> or <span  className='color-t'> coverage</span> capacity use cases, especially capital intensive 5G, affordable as it enables mobile operators and industries to unleash the full value of connectivity. With unified across 5G 4G 3G 2G cloud-native architecture that is open and standardized across five key domains – RAN, <span className='color-t'> Edge,</span> Core, Orchestration and Analytics – we are committed to 5G vision of bringing Internet to every person and organization for a truly connected world.  <span className='color-t'> 5G networks</span> today.</p>
                    <p>Through open collaboration with our OpenRAN ecosystem partners, we have created a world first and largest fully-compliant OpenRAN ecosystem that is capable of delivering the next generation of wireless infrastructure at dramatically lower cost, ensuring more equal access to 5G across the globe.</p>

                <div className="row">
                {/* 1st */}
                    <div  className="col-md-6 col-sm-12">
                        <div className='contentData'>
                            <h3>Leadership</h3>
                            <p className='desc-data'>Our unified, cloud-native, software-defined product portfolio spans across RAN, transport, Core, and Analytics to help reduce the cost and deployment complexity of today’s and tomorrow’s networks for consumers and industries.</p>
                            <Link className='cardBtn nav-link'>Lern more <BsArrowRight/> </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={CampanyImg1} width={"100%"} alt="img" />
                    </div>

                {/* 2nd */}
                    <div className="col-md-6 col-sm-12">
                         <img src={CampanyImg2} width={"100%"} alt="img" />
                    </div>
                    <div  className="col-md-6 col-sm-12">
                        <div className='contentData'>
                            <h3>Our Culture</h3>
                            <p className='desc-data'>We are a fast-moving technology company that is proud of what we do, ambitious about innovation and collaboration, and keenly focused on our customers’ success.</p>
                            <Link className='cardBtn nav-link'>Join Our Global Team  <BsArrowRight/> </Link>
                        </div>
                    </div>
                </div> 
            </div> 
        </div> 
        </>
    )
}
export default Company;