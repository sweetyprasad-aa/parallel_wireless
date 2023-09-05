import React from "react";
import './UpcomingEvent.css';
import eventIcon1 from '../../assets/images/icon-events.png';
import eventIcon2 from '../../assets/images/icon-awards.png';
import { AiOutlineRight } from "react-icons/ai";
import productImg1 from '../../assets/images/product-1.png';
import productImg2 from '../../assets/images/product-2.jpg';
import productImg3 from '../../assets/images/product-3.jpg';

const UpcomingEvent = ()=>{
    return(
        <>
            <section className="bg-light p-5">
                <div className="container mt-5 ">
                    <div className="row">
                        <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center">
                            <img src = {eventIcon1} alt="eventIcon" className="eventIcon" />
                            <h1 className="mt-2">Upcoming Events</h1>
                            <p className="culturePara">Visit with us at upcoming tradeshows, conferences or attend our webinars to learn how we can help you reimagine your networks.</p>
                            <button className="cardBtn">Connect with us at events <AiOutlineRight/></button>
                        </div>
                        <div className="col-sm-6 d-flex flex-column justify-content-center align-items-center">
                            <img src = {eventIcon2} alt="eventIcon" className="eventIcon" />
                            <h1 className="mt-2">Awards</h1>
                            <p className="culturePara">We are honored and humbled to be recognized by the industry with awards for our innovation, technology vision and deployments.</p>
                            <button className="cardBtn">Learn More <AiOutlineRight/></button>
                        </div>
                    </div> 
                </div>
            </section>

            {/* ---------Product section------------ */}
            <section className="mt-5 eventSection p-4">
                <div className="container">
                    <div className="row">
                        <h1 className="text-center">Our Products</h1>
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-4 ">
                            <div className="imgScale">
                                <img src={productImg1} alt="productImg"  className="productImg"/>
                                <div className="mt-4 p-3">
                                    <h2>Access: OpenRAN</h2>
                                    <p className="culturePara">Our OpenRAN hardware ecosystem consists of macros, outdoor and indoor small cells, and Massive MIMOs that are all Software Defined Radios (SDRs) and can be software upgraded to 5G for ease of deployment and much lower cost.</p>
                                    <button className="sliderBtn">Learn More <AiOutlineRight/></button>
                                </div>    
                            </div>
                        </div>
                        <div className="col-sm-4 ">
                            <div className="imgScale">
                                <img src={productImg2} alt="productImg"  className="productImg"/>
                                <div className="mt-4 p-3">
                                    <h2>Network Software</h2>
                                    <p className="culturePara">Our software platforms provide RAN and core services, orchestration, programmability, and service assurance including analytics and monitoring to deliver business agility, TCO reduction and to enable new revenue opportunities.</p>
                                    <button className="sliderBtn">Learn More <AiOutlineRight/></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4 ">
                            <div className="imgScale">
                                <img src={productImg3} alt="productImg"  className="productImg"/>
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
export default UpcomingEvent;