import React from "react";
import './Career.css';
import careerImg1 from '../../assets/images/PW-CareersPage-Disrupting.jpg';
import careerImg2 from '../../assets/images/PW-CareersPage-Technology.jpg';
import careerImg3 from '../../assets/images/PW-CareersPage-TeamParallelWireless.jpg';
import careerImg4 from '../../assets/images/people-first.jpg';
import CareerCard from "./CareerCard";

const Career = ()=>{
    const StyleHr = {
        height:'2px',
        backgroundColor:'orangered'
    }
    return(
        <>
            <div className="CareerbgImg hero-inner">
                <div className='main-heading'>
                    <h1 className='Solheading'>Careers at Parallel Wireless</h1> 
                </div>
                </div>

                <div className="container mb-4">
                <div className='content'>

                <div className="row">
                {/* 1st */}
                    <div  className="col-md-6 col-sm-12">
                        <div className='contentData'>
                            <h3>We’re disrupting, challenging, and leading the future of telecommunications.</h3>
                            <p className='desc-data'>Support urban or rural coverage deployments with Parallel Wireless easy to deploy and easy to maintain OpenRAN to deliver optimal subscriber experience at much lower TCO.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={careerImg1} width={"100%"} alt="img" />
                    </div>

                {/* 2nd */}
                    <div className="col-md-6 col-sm-12">
                         <img src={careerImg2} width={"100%"} alt="img" />
                    </div>
                    <div  className="col-md-6 col-sm-12">
                        <div className='contentData'>
                            <h3>Technology that delivers wireless connectivity, so all people can be connected whenever, wherever, and however they choose.</h3>
                            <p className='desc-data'>Deliver high throughput, low latency and consistent experience with Parallel Wireless easy to install and maintain, low-cost and high-performing cloud-native 5G 4G 3G 2G architecture for macro or small cell deployments.</p>
                        </div>
                    </div>

                {/* 3nd */}
                    <div  className="col-md-6 col-sm-12">
                        <div className='contentData'>
                            <h3>We Are #TeamParallelWireless</h3>
                            <p className='desc-data'>Deploy reliable indoor coverage solutions at pennies per square foot while reducing the complexity of deployment and maintenance and delivering quality voice and data services to the end user</p>
                          </div>
                    </div>
                    <div className="col-md-6 col-sm-12">
                        <img src={careerImg3} width={"100%"} alt="img" />
                    </div>  

                    <div className="text-center mt-5 p-5">
                        <button className="text-uppercase sliderBtn ">Explore oportunity</button>
                    </div>            
                </div> 
                 <div className="hr" style={StyleHr}></div> 
            </div> 
        </div>

        <section className="mt-5">
            <div className="container">
                <div className="row mt-4">
                    <div className="col-sm-6">
                        <img src={careerImg4} alt="img" width={'100%'} />
                    </div>
                    <div className="col-sm-6">
                        <div className="content">
                            <h2>Parallel Wireless delivers on a People First Strategy</h2>
                            <p className='desc-data'>Our team members are essential to making Parallel Wireless an innovative technology leader! Our competitive total rewards package and long-term wealth creation opportunity are unmatched in the industry. Professionals at Parallel Wireless are provided with rapid career growth opportunities to reach their full potential and make a strong lasting impact within the Parallel Wireless community. Parallel Wireless provides challenging assignments, strong growth opportunities in a supportive culture that fosters teamwork and collaboration while encouraging innovation and break through ideas supported by the leadership team who are vested in your success, a concept we call Servant Leadership.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <CareerCard/>
        
        </>
    )
}
export default Career;