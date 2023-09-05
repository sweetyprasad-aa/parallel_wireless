import React from "react";
import './Solution.css';
import {Link} from 'react-scroll';
import SolutionImg1 from '../../assets/images/coverage-img.jpg';
import SolutionImg2 from '../../assets/images/capacity-img.jpg';
import SolutionImg3 from '../../assets/images/in-building2.jpg';
import SolutionImg4 from '../../assets/images/public-safety.jpg';
import SolutionImg5 from '../../assets/images/Images-Private-LTE.jpg';
import { AiOutlineRight } from "react-icons/ai";
import { FaCloudDownloadAlt } from 'react-icons/fa'

const Solution = ()=>{
    return(
        <>
        
            <div className="bgImg hero-inner">
                <div className='main-heading'>
                    <h1 className='Solheading'>Solutions</h1> 
                </div>
            </div>

            <div className="container mb-4">
                <div className='content'>
                    <h1 className='text-center'>Reimagine Your Network.</h1>
                    <h1 className='text-center'>Reimagine Your Economics</h1>
                    <p className='para mt-2'>Parallel Wireless created world’s only 5G 4G 3G 2G <span className='color-t'>OpenRAN</span>  architecture to make delivery of wireless <span className='color-t'> coverage</span> or <span  className='color-t'> coverage</span> capacity use cases, especially capital intensive 5G, affordable as it enables mobile operators and industries to unleash the full value of connectivity. With unified across 5G 4G 3G 2G cloud-native architecture that is open and standardized across five key domains – RAN, <span className='color-t'> Edge,</span> Core, Orchestration and Analytics – we are committed to 5G vision of bringing Internet to every person and organization for a truly connected world. The company’s end-to-end ALL G cloud-native OpenRAN portfolio is designed to help our customers modernize their networks, reduce deployment cost and complexity, increase operational efficiency, find new revenue streams and start deploying multi-vendor <span className='color-t'> 5G networks</span> today.</p>

                <div className="row">
                {/* 1st */}
                    <div  className="col-md-6 col-sm-12">
                        <div className='contentData'>
                            <h3>Rural</h3>
                            <p className='desc-data'>Support urban or rural coverage deployments with Parallel Wireless easy to deploy and easy to maintain OpenRAN to deliver optimal subscriber experience at much lower TCO.</p>
                            <Link className='cardBtn nav-link'>Lern more <AiOutlineRight/></Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={SolutionImg1} width={"100%"} alt="img" />
                    </div>

                {/* 2nd */}
                    <div className="col-md-6 col-sm-12">
                         <img src={SolutionImg2} width={"100%"} alt="img" />
                    </div>
                    <div  className="col-md-6 col-sm-12">
                        <div className='contentData'>
                            <h3>Rural</h3>
                            <p className='desc-data'>Deliver high throughput, low latency and consistent experience with Parallel Wireless easy to install and maintain, low-cost and high-performing cloud-native 5G 4G 3G 2G architecture for macro or small cell deployments.</p>
                            <Link className='cardBtn nav-link'>Lern more <AiOutlineRight/></Link>
                        </div>
                    </div>

                {/* 3nd */}
                    <div  className="col-md-6 col-sm-12">
                        <div className='contentData'>
                            <h3>In-Building</h3>
                            <p className='desc-data'>Deploy reliable indoor coverage solutions at pennies per square foot while reducing the complexity of deployment and maintenance and delivering quality voice and data services to the end user</p>
                          <Link className='cardBtn nav-link'>Lern more <AiOutlineRight/></Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={SolutionImg3} width={"100%"} alt="img" />
                    </div>

                {/* 4th */}
                    <div className="col-md-6 col-sm-12">
                        <img src={SolutionImg4} width={"100%"} alt="img" />
                    </div>
                    <div  className="col-md-6 col-sm-12">
                        <div className='contentData'>
                            <h3>Public Safety LTE</h3>
                            <p className='desc-data'>Support urban or rural coverage deployments with Parallel Wireless easy to deploy and easy to maintain OpenRAN to deliver optimal subscriber experience at much lower TCO.</p>
                            <Link className='cardBtn nav-link'>Lern more <AiOutlineRight/></Link>
                        </div>
                    </div>


                {/* 5th */}
                    <div  className="col-md-6 col-sm-12">
                        <div className='contentData'>
                            <h3>Private LTE</h3>
                            <p className='desc-data'>Support urban or rural coverage deployments with Parallel Wireless easy to deploy and easy to maintain OpenRAN to deliver optimal subscriber experience at much lower TCO.</p>
                            <Link className='cardBtn nav-link'>Lern more <AiOutlineRight/></Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={SolutionImg5} width={"100%"} alt="img" />
                    </div>
                </div> 
            </div> 
        </div> 
        <section className="mt-4 p-5 bg-light solutionIconDiv ">
            <div className="d-flex flex-column justify-content-center align-items-center p-4">
            <p className="solution-Para">Find out how we help our customers roll out services faster and reduce OPEX by visiting our resources page to download data sheets and solution overviews or watch customer videos or webinar recordings.</p>
                <FaCloudDownloadAlt className="solutionIcon"/>
            </div>
        </section>
        </>
    )
}
export default Solution;