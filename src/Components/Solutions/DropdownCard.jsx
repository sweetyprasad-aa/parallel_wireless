import React from "react";
import { FaCloudDownloadAlt } from 'react-icons/fa';
import Urban1 from '../../assets/images/product-4.jpg';
import Urban2 from '../../assets/images/product-1.png';
import Urban3 from '../../assets/images/product-2.jpg';
import { AiOutlineRight } from "react-icons/ai";

const DropdownCard = () =>{
    return(
        <>
            <section className="mt-4 p-5 bg-light solutionIconDiv ">
                <div className="d-flex flex-column justify-content-center align-items-center p-4">
                    <p className="solution-Para">Find out how we help our customers roll out services faster and reduce OPEX by visiting our resources page to download data sheets and solution overviews or watch customer videos or webinar recordings.</p>
                    <FaCloudDownloadAlt className="solutionIcon"/>
                </div>
            </section>

            <section className="mt-5 eventSection p-4">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center">Related Products & Technologies</h1>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-4 ">
                            <div className="imgScale">
                                <img src={Urban1} alt="productImg"  className="productImg"/>
                                <div className="mt-4 p-3">
                                    <h2>Access: OpenRAN</h2>
                                    <p className="culturePara">Our OpenRAN hardware ecosystem consists of macros, outdoor and indoor small cells, and Massive MIMOs that are all Software Defined Radios (SDRs) and can be software upgraded to 5G for ease of deployment and much lower cost.</p>
                                    <button className="sliderBtn">Learn More <AiOutlineRight/></button>
                                </div>    
                            </div>
                        </div>
                        <div className="col-sm-4 ">
                            <div className="imgScale">
                                <img src={Urban2} alt="productImg"  className="productImg"/>
                                <div className="mt-4 p-3">
                                    <h2>Network Software</h2>
                                    <p className="culturePara">Our software platforms provide RAN and core services, orchestration, programmability, and service assurance including analytics and monitoring to deliver business agility, TCO reduction and to enable new revenue opportunities.</p>
                                    <button className="sliderBtn">Learn More <AiOutlineRight/></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 ">
                            <div className="imgScale">
                                <img src={Urban3} alt="productImg"  className="productImg"/>
                                <div className="mt-4 p-3">
                                    <h2>Intelligence and Automation</h2>
                                    <p className="culturePara">Network automation and intelligence software across ALL Gs for outdoor and indoor delivers TCO savings with self-configuration and self-optimization to enable optimal subscriber experience.</p>
                                    <button className="sliderBtn">Learn More <AiOutlineRight/></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default DropdownCard;