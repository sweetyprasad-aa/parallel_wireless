import React from "react";
import './Customer.css';
import  clientlogo from "../../assets/images/clientlogo-02.png";
import  etisalat_logo from "../../assets/images/etisalat-logo.jpg";
import  inland_logo from "../../assets/images/inland-cellular-logo.png";
import InternetParaTodos from "../../assets/images/InternetParaTodos.png";
import  MTN_logo from "../../assets/images/MTN-logo.jpg";
import  Optimera from "../../assets/images/Optimera.png";
import  optus_logo from "../../assets/images/optus-logo.png";
import  ruralfirst from "../../assets/images/5g-rural-first.png";
import  smart from "../../assets/images/smart.png";
import  telefonica from "../../assets/images/telefonica.png";
import  vodacom from "../../assets/images/vodacom.png";
import  vodaphone_logo from "../../assets/images/vodaphone-logo.png";
import CardCase  from './CardCase';

const Customer = ()=>{
    return(
        <>
            <div className="cusbgImg">
                <div className='main-heading'>
                    <h1 className='Solheading'>Customers</h1> 
                </div>
            </div>

            <div className="container mt-4">
            <h1 className='mt-4 text-center'>Helping Reimagine Global Cellular Networks</h1>
            <p className='mt-4 para text-center'>Bringing together unified network software and OpenRAN hardware, we are the only US provider capable of delivering true end-to-end innovative solutions for 5G, 4G, 3G and 2G deployments globally, including complex mixed technology and multi-vendor scenarios at much lower cost. Parallel Wireless enabled the world’s largest Open RAN ecosystem and has been recognized by Vodafone and Telefonica as a best performing vendor.  Our customers include over 60 global mobile operators, as well as private and public industries and governments that use our software defined network portfolio to reimagine their networks. Our innovation has been recognized with 60+ industry awards.</p>
            </div>

            <div className='custem d-flex flex-column justify-content-center align-items-center p-5'>
            <h2 className='text-center'>Open RAN Integration: Run With It</h2>
            <button type="buttoleadern" class="sliderBtn mt-2 img-leader bc-btn ">VIEW THE WHITE PAPER</button>
            </div>

            <div className="row d-flex justify-content-center align-items-center">
                    <img className='customIcon' src={telefonica} alt="img" />
                    <img className='customIcon' src={inland_logo} alt="img" />
                    <img className='customIcon' src={clientlogo} alt="img" />
                    <img className='customIcon' src={MTN_logo} alt="img" />
                    <img className='customIcon' src={optus_logo} alt="img" />
                    <img className='customIcon' src={etisalat_logo} alt="img" />      
                </div>

            <div className="row d-flex justify-content-center align-items-center">
                <img className='customIcon' src={vodaphone_logo} alt="img" />
                <img className='customIcon' src={ruralfirst} alt="img" />
                <img className='customIcon' src={smart} alt="img" />
                {/* <img className='customIcon' src={telefonica} alt="img" /> */}
                <img className='customIcon' src={Optimera} alt="img" /><br/>
                    
            </div>
            <div className="row d-flex justify-content-center align-items-center">
                <img className='customIcon' src={vodacom} alt="img" />
                <img className='customIcon' src={InternetParaTodos} alt="img" />
            </div>
            <CardCase />
        </>
    )
}
export default Customer;