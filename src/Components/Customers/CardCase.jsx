import React from "react";
import {FaCloudDownloadAlt} from 'react-icons/fa';
import image from '../../assets/images/5g-img.jpg';
import './CardCase.css';
import {BsArrowRight} from 'react-icons/bs';

const CardCase = ()=>{
    //  const videoUrl = 'https://www.youtube.com/embed/w0PK0VQvjko';

    return(
        <>
        <section className="mt-5">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-6 text-center">
                        <h3 className="mt-5">Telefonica Case Study</h3>
                        <p className="cardPara">Parallel Wireless Helps New Operator Mayutel to Build 3G/4G Open RAN Network in 3 Months Through Partnership with Telefonica.</p>
                        <button className="cardBtn">Download Case Study <FaCloudDownloadAlt/></button>
                    </div>
                    <div className="col-sm-6">
                        <img src={image} alt="img" width={'100%'} /> 
                    </div>
                </div>
            </div>
        </section>

        <section className="custbgImg mt-5">
            <div className="card-inner-content">
                <div className="container">
                    <div className="row bg-light card-row">
                        <div className="col-sm-6 ">
                            <h2 className="cardCase-heading text-white mx-4 ">Why Parallel Wireless</h2>
                            <ol className="Card-list">
                                <li>Interoperable across All G</li>
                                <li>Mature and end-to-end OpenRAN network solutions</li>
                                <li>Unification and simplification of 5G 4G 3G 2G and Wi-Fi networks</li>
                                <li>Easy install with plug-n-play and automated maintenance</li>
                                <li>NewRevenue and network sharing</li>
                                <li>5G-native architecture</li>
                                <li>Customer focused</li>
                            </ol>
                        </div>
                        <div className="col-sm-6">
                            <h2 className="cardCase-heading text-white mx-4">Benefits</h2>
                            <ol className="Card-list">
                                <li>Lowest TCO</li>
                                <li>Low-density or high-density indoor and outdoor coverage and capacity</li>
                                <li>Faster deployment with less deployment CAPEX</li>
                                <li>Operational savings through automation and predictive OPEX</li>
                                <li>Profitability</li>
                                <li>Agility and cost-effective migration to 5G</li>
                                <li>Globally deployed</li>
                            </ol>
                        </div>
                        <div className="text-center">
                            <button className="sliderBtn">
                                Learn More <BsArrowRight/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>


        <section className="mt-5">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-sm-6">
                        <img src={image} alt="img" width={'100%'} /> 
                    </div>
                    <div className="col-sm-6 text-center">
                        <h3 className="mt-5">Telefonica Case Study</h3>
                        <p className="cardPara">Parallel Wireless Helps New Operator Mayutel to Build 3G/4G Open RAN Network in 3 Months Through Partnership with Telefonica.</p>
                        <button className="cardBtn ">Download Case Study <FaCloudDownloadAlt/></button>
                    </div>
                </div>
            </div>
        </section>

        {/* <section className="mt-5 p-4">
            <div className="text-center">
                 <iframe
                        width="560"
                        height="315"
                        src={videoUrl}
                        title="YouTube Video"
                    />
            </div>
        </section> */}
        </>
    )
}
export default CardCase;