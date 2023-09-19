import React from "react";
import './Culture.css';
import cultureImg1 from '../../assets/images/icon-leadership-2.png';
import cultureImg2 from '../../assets/images/icon-people.png';
import cultureImg3 from '../../assets/images/icon-culture.png';
import { AiOutlineRight } from "react-icons/ai";

import cultureImg4 from '../../assets/images/Starts-Here-Homepage.jpg';
import cultureImg5 from '../../assets/images/Reimagine-network-Homepage.jpg';
import cultureImg6 from '../../assets/images/REIMAGINE-ECONOMICS.jpg';


const Culture = ()=>{
    return(
        <>
        <section className="mt-5">
            <div className="container">
                <div className="row">
                    <h2 className="text-center">Leadership / Culture</h2>
                </div>
                <div className="row mt-4 text-center">
                <div className="col-sm-4">
                    <div className="">
                        <img src={cultureImg1} alt="cultureImg"  className="cultureImg"/>
                        <div className="mt-4 px-1 py-3">
                            <h2>Our Leadership</h2>
                            <p className="culturePara">The Parallel Wireless leadership team has experience building many startup companies into leading industry players.</p>
                        </div>
                        <div><button className="cardBtn px-1 py-2">Our Leaders <AiOutlineRight/></button></div>
                            
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="">
                        <img src={cultureImg2} alt="cultureImg"  className="cultureImg"/>
                        <div className="mt-4 px-1 py-3">
                            <h2>Our People</h2>
                            <p className="culturePara">Reimaginers wanted. We have positions open across the globe. Join us.</p>
                        </div>
                        <div><button className="cardBtn px-1 py-2">Become a Reimagine <AiOutlineRight/></button></div>    
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="">
                        <img src={cultureImg3} alt="cultureImg"  className="cultureImg"/>
                        <div className="mt-4 px-1 py-3">
                            <h2>Our Culture</h2>
                            <p className="culturePara">We are a fast-moving technology company that is ambitious about innovation and collaboration, and focused on our customers’ success.</p>
                        </div>
                        <div><button className="cardBtn px-1 py-2">Our Culture <AiOutlineRight/></button></div>    
                    </div>
                </div>
            </div>
            </div>
        </section>


    {/*----------------- Career Section------------ */}
            <section className="bg-light mt-5">
                <div className="careerSec text-center p-4 ">
                    <h2>Career</h2>
                    <p className="culturePara">View our global openings and apply today to join the team.</p>
                    <button className="sliderBtn px-4 py-2">Join us</button>
                </div>
            </section>

    {/* --------image and content section--------- */}
            <section className="p-5">
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-sm-6 ">
                            <h3>5G Starts Here</h3>
                            <p className="culturePara px-1">Through open collaboration with OpenRAN ecosystem, we’ve created the world’s first and largest fully compliant OpenRAN portfolio that delivers the next generation of wireless infrastructure at a much lower cost, ensuring more equal access to 5G globally. Our software-defined and interoperable OpenRAN architecture was designed from the ground up to reduce complexity and drive out cost from every aspect from the RAN to the Core. We pride ourselves on offering a fully automated outdoor or indoor coverage and capacity solutions that are easy and cost-effective to deploy and maintain and are software upgradable to 5G.</p>
                            <button className="cardBtn">Learn More</button>
                        </div>
                        <div className="col-sm-6">
                            <img src={cultureImg4} alt="img" className="img-fluid" max-width={'100%'} />
                        </div>
                    </div>
                    {/*------- 2nd Row------- */}
                    <div className="row">
                        <div className="col-sm-6">
                            <img src={cultureImg5} alt="img" className="img-fluid" max-width={'100%'}/>
                        </div>
                        <div className="col-sm-6">
                            <h3>Reimagine Your Network</h3>
                            <p className="culturePara px-1">Parallel Wireless created the world’s only ALL G (5G/4G/3G/2G) software-enabled OpenRAN architecture to make delivery of wireless coverage or capacity use cases, especially capital intensive 5G, affordable as it enables mobile operators and industries to unleash the full value of connectivity. With unified across 5G/4G/3G/2G and Wi-Fi cloud-native architecture that is open and standardized across five key domains – RAN, Edge, Core, Orchestration and Analytics – we are committed to the 5G vision of bringing Internet to every person and organization for a truly connected world at much lower cost to deploy and maintain.</p>
                            <button className="cardBtn">Learn More</button>
                        </div>
                    </div>
                    {/* --------3rd Row--------- */}
                    <div className="row">
                       <div className="col-sm-6">
                            <h3>Reimagine Your Economics</h3>
                            <p className="culturePara px-1">The company’s end-to-end ALL G cloud-native OpenRAN portfolio is designed to help our customers modernize their networks, reduce deployment cost and complexity, increase operational efficiency, find new revenue streams and start deploying multi-vendor 5G networks today. Software innovation and openness across 5G/4G/3G /2G and Wi-Fi coupled with network automation drives TCO reduction for low-density or high density use cases of up to 60% for CAPEX and 65% for OPEX.</p>
                            <button className="cardBtn">Hear from Our Customers</button>
                       </div>
                        <div className="col-sm-6">
                            <img src={cultureImg6} alt="img" className="img-fluid" max-width={'100%'} />
                        </div> 
                    </div>
                </div>
            </section>
        </>
    )
}
export default Culture;