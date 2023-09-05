import React from "react";
import CareerCardImg1 from '../../assets/images/PW-CareersPage-EmployeeProgram.png';
import CareerCardImg2 from '../../assets/images/PW-CareersPage-ComprehensiveBenefits.jpg';
import CareerCardImg3 from '../../assets/images/PW-CareersPage-GrowthLifesytle-large.jpg';
// import { Link } from "react-scroll";

const CareerCard = ()=>{
    const StyleHr ={
        height:'2px',
        backgroundColor: 'orangered'
    }
    return(
        <>
            <section className="mt-5">
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-sm-4">
                            <div>
                                <img src={CareerCardImg1} alt="img" width={'100%'} />
                            </div>
                            <div className="mt-4">
                                <h2>Employee Programs</h2>
                                <p>Our programs are global but delivered regionally ensuring every employee receives a tailored, individual development plan to get you to be the best version of yourself. We celebrate our wins with recognition (Spot Awards) and time off to give back to your community.</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div>
                                <img src={CareerCardImg2} alt="img" width={'100%'} />
                            </div>
                            <div className="mt-4">
                                <h2>Comprehensive Benefits</h2>
                                <p>Our benefits are competitive and designed to foster and encourage good health, peace of mind, and long- term financial security for our team members around the globe.</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div>
                                <img src={CareerCardImg3} alt="img" width={'100%'} />
                            </div>
                            <div className="mt-4">
                                <h2>Growth and Lifestyle</h2>
                                <p>We support you with everything from flexible/remote working arrangements, a comprehensive global mobility program to support your career growth, and paid time off so you have time to rest and recharge!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section><br/>
            <hr/>


        <section className="mt-4 p-5 ">
            <div className="container d-flex flex-column justify-content-center align-items-center p-4">
                <p className="solution-Para px-4 py-2">Our team is “All In” and vested to achieve amazing growth as we transform the wireless broadband industry.</p>
                <button className="cardBtn">Join Us!</button>
            </div>
        </section>
        <div className="hr" style={StyleHr}></div>
        

        <section className="mt-5 p-5">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 text-center px-5 py-3">
                        <div>
                            <h2>OUR VISION</h2>
                            <p className="para">To reimagine the wireless network so all people can be connected whenever, wherever, and however they choose.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 text-center px-5 py-3">
                        <div>
                            <h2>OUR MISSION</h2>
                            <p className="para">To deliver innovative products that unlock value and disrupt the economics of wireless networks through intelligence and openness. Our customers’ success is our success.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>

    )
}
export default CareerCard;