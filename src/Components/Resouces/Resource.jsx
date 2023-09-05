import React from "react";
import './Resource.css';
import {Link} from 'react-scroll';
import resourceImg1 from '../../assets/images/5g-img.jpg';
import resourceImg2 from '../../assets/images/eNodeB-img.jpg';
import resourceImg3 from '../../assets/images/parallel-photo.jpg';
import resourceImg4 from '../../assets/images/city-img.jpg';
import resourceImg5 from '../../assets/images/presentation-img.jpg';
import resourceImg6 from '../../assets/images/parallel-play-button.jpg';
import {FaVideo, FaCloudDownloadAlt} from 'react-icons/fa';


const Resource = ()=>{
    return(
        <>
            <div className="ResbgImg hero-inner">
                <div className='main-heading'>
                    <h1 className='Solheading'>Resources</h1> 
                </div>
                </div>

                <div className="container mb-4">
                <div className='content'>
                    <h1 className='text-center'>Reimagine Your Network.</h1>
                    <h1 className='text-center'>Reimagine Your Economics</h1>
                    <p className='para mt-2 text-large'>In this asset library you’ll find solutions brochures, data sheets, recorded webinars, and customer videos and case studies to learn more about Parallel Wireless world’s leading <span className="color-t">5G 4G 3G 2G </span>OpenRAN.</p>

                <div className="row">
                {/* 1st */}
                    <div  className="col-md-6 col-sm-12">
                        <div className='contentData'>
                            <h3>Solution Overviews</h3>
                            <p className='desc-data'>Support urban or rural coverage deployments with Parallel Wireless easy to deploy and easy to maintain OpenRAN to deliver optimal subscriber experience at much lower TCO.</p>
                            <Link className='cardBtn nav-link'>Lern more </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={resourceImg1} width={"100%"} alt="img" />
                    </div>

                {/* 2nd */}
                    <div className="col-md-6 col-sm-12">
                         <img src={resourceImg2} width={"100%"} alt="img" />
                    </div>
                    <div  className="col-md-6 col-sm-12">
                        <div className='contentData'>
                            <h3>Case Studies</h3>
                            <p className='desc-data'>Deliver high throughput, low latency and consistent experience with Parallel Wireless easy to install and maintain, low-cost and high-performing cloud-native 5G 4G 3G 2G architecture for macro or small cell deployments.</p>
                            <Link className='cardBtn nav-link'>Lern more </Link>
                        </div>
                    </div>

                {/* 3nd */}
                    <div  className="col-md-6 col-sm-12">
                        <div className='contentData'>
                            <h3>Customer Testimonial Videos</h3>
                            <p className='desc-data'>Deploy reliable indoor coverage solutions at pennies per square foot while reducing the complexity of deployment and maintenance and delivering quality voice and data services to the end user</p>
                          <Link className='cardBtn nav-link'>Watch More Here <FaVideo /></Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={resourceImg3} width={"100%"} alt="img" />
                    </div>

                {/* 4th */}
                    <div className="col-md-6 col-sm-12">
                        <img src={resourceImg4} width={"100%"} alt="img" />
                    </div>
                    <div  className="col-md-6 col-sm-12">
                        <div className='contentData'>
                            <h3>White Papers</h3>
                            <p className='desc-data'>Support urban or rural coverage deployments with Parallel Wireless easy to deploy and easy to maintain OpenRAN to deliver optimal subscriber experience at much lower TCO.</p>
                            <Link className='cardBtn nav-link'>Download Now <FaCloudDownloadAlt/> </Link>
                        </div>
                    </div>


                {/* 5th */}
                    <div  className="col-md-6 col-sm-12">
                        <div className='contentData'>
                            <h3>Webinars</h3>
                            <p className='desc-data'>Support urban or rural coverage deployments with Parallel Wireless easy to deploy and easy to maintain OpenRAN to deliver optimal subscriber experience at much lower TCO.</p>
                            <Link className='cardBtn nav-link'>Watch Now <FaVideo/></Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={resourceImg5} width={"100%"} alt="img" />
                    </div>
                
                {/* 6th */}
                <div className="col-md-6 col-sm-12">
                        <img src={resourceImg6} width={"100%"} alt="img" />
                    </div>
                    <div  className="col-md-6 col-sm-12">
                        <div className='contentData'>
                            <h3>Videos and Demos</h3>
                            <p className='desc-data'>Support urban or rural coverage deployments with Parallel Wireless easy to deploy and easy to maintain OpenRAN to deliver optimal subscriber experience at much lower TCO.</p>
                            <Link className='cardBtn nav-link'>Watch Now <FaVideo/> </Link>
                        </div>
                    </div>
                </div> 
            </div> 
        </div> 
        <section className="mt-4 p-5 bg-light solutionIconDiv ">
            <div className="d-flex flex-column justify-content-center align-items-center p-4">
            <p className="solution-Para">Learn from our technical experts about how our OpenRAN solutions are improving networks around the world.</p>
                {/* <FaCloudDownloadAlt className="resoucreIcon"/> */}
            </div>
        </section>
        </>
    )
}
export default Resource;