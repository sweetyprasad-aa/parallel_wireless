import React from "react";
import './Product.css';
import {Link} from 'react-scroll';
import ProdcutImg1 from '../../assets/images/products-img.jpg';
import ProdcutImg2 from '../../assets/images/open-ran.jpg';
import { FaCloudDownloadAlt } from 'react-icons/fa'

const Product = ()=>{
    return(
        <>
        
            <div className="ResbgImg hero-inner">
                <div className='main-heading'>
                    <h1 className='Solheading'>Products & Technologies</h1> 
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
                            <h3>Products</h3>
                            <p className='desc-data'>Our unified, cloud-native, software-defined product portfolio spans across RAN, transport, Core, and Analytics to help reduce the cost and deployment complexity of today’s and tomorrow’s networks for consumers and industries.</p>
                            <Link className='cardBtn nav-link'>Lern more </Link>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={ProdcutImg1} width={"100%"} alt="img" />
                    </div>

                {/* 2nd */}
                    <div className="col-md-6 col-sm-12">
                         <img src={ProdcutImg2} width={"100%"} alt="img" />
                    </div>
                    <div  className="col-md-6 col-sm-12">
                        <div className='contentData'>
                            <h3>Technologies</h3>
                            <p className='desc-data'>Parallel Wireless leads the innovation in wireless infrastructure, with software-defined unified cloud-native OpenRAN network solutions. We provide the world’s largest OpenRAN ecosystem, delivering substantial cost savings to mobile operators as they build or maintain today’s 4G/3G/2G and tomorrow’s multi-vendor 5G networks to enable quality experience to their end users.</p>
                            <Link className='cardBtn nav-link'>Lern more </Link>
                        </div>
                    </div>
                </div> 
            </div> 
        </div> 

        <section className="mt-4 p-5 bg-light solutionIconDiv ">
            <div className="d-flex flex-column justify-content-center align-items-center p-4">
            <p className="solution-Para">Visit our Resources page to download data sheets, solution overviews, watch webinar recordings and much more!</p>
                <FaCloudDownloadAlt className="solutionIcon"/>
            </div>
        </section>

        <section className="prodImg"> 
            <div className="row mt-5">
                <div clo-sm-12>
                    <div className="prod-inner-content">
                        <h2 className="prodHeading">Vodafone Case Study</h2>
                        <p className="prodPara">Learn how the Parallel Wireless ALL G OpenRAN network solution helped Vodafone modernize their network and reduce CAPEX and OPEX.</p>
                        <button className="sliderBtn">Learn More <FaCloudDownloadAlt/></button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
export default Product;