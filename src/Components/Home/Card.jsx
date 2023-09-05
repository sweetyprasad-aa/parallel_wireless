import React from "react";
import './Card.css';
import { AiOutlineRight } from "react-icons/ai";
import cardImg1 from '../../assets/images/reimagine.jpg';
import cardImg2 from '../../assets/images/reimagine3.jpg';
import cardImg3 from '../../assets/images/reimagine2.jpg';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';


import image1 from '../../assets/images/optus-logo.png';
import image2 from '../../assets/images/zain-logo.png';
import image3 from '../../assets/images/clientlogo-02.png';
import image4 from '../../assets/images/inland-cellular-logo.png';
import image5 from '../../assets/images/5g-rural-first.png';
import image6 from '../../assets/images/Optimera.png';
import image7 from '../../assets/images/smart.png';
import image8 from '../../assets/images/vodacom.png';
import image9 from '../../assets/images/telefonica.png';
import image10 from '../../assets/images/MTN-logo.jpg';



const Card = ()=>{
    // const imageUrls = [image1, image2,image3,image4, image5];

    return(
        <>
            <section className="mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4 ">
                            <div className="">
                                <img src={cardImg1} alt="cardImg"  className="cardImg"/>
                                <div className="mt-4">
                                    <h2>Reimagine Coverage</h2>
                                    <p>Parallel Wireless OpenRAN supports indoor or outdoor deployment scenarios at the lowest TCO and can be deployed on an accelerated timeline to help mobile operators deliver coverage everywhere from rural to suburban to most dense urban.</p>
                                </div>
                                <button className="cardBtn">Learn More <AiOutlineRight/></button>    
                            </div>
                        </div>
                        <div className="col-sm-4 ">
                            <div>
                                <img src={cardImg2} alt="cardImg"  className="cardImg"/>
                                <div className="mt-4">
                                    <h2>Reimagine Coverage</h2>
                                    <p>Parallel Wireless OpenRAN supports indoor or outdoor deployment scenarios at the lowest TCO and can be deployed on an accelerated timeline to help mobile operators deliver coverage everywhere from rural to suburban to most dense urban.</p>
                                </div>
                                <button className="cardBtn">Learn More <AiOutlineRight/></button>
                            </div>
                        </div>
                        <div className="col-sm-4 ">
                            <div className="">
                                <img src={cardImg3} alt="cardImg"  className="cardImg"/>
                                <div className="mt-4">
                                <h2>Reimagine 5G and Beyond</h2>
                                <p>Parallel Wireless OpenRAN supports indoor or outdoor deployment scenarios at the lowest TCO and can be deployed on an accelerated timeline to help mobile operators deliver coverage everywhere from rural to suburban to most dense urban.</p>
                            </div>
                            <button className="cardBtn">Learn More <AiOutlineRight/></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        {/*---------- sponser company section----------- */}
            <section className="mt-5 bg-light p-4" >
                <div className='container sponserSlider'>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={50}
                    loop={true}
                    pagination={{
                    clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination]}
                    className="sponserSwiper">
                        <SwiperSlide>
                            <div className="img">
                                <img src={image1} alt='swiperImg'/>
                                <img src={image2} alt='swiperImg'/>
                                <img src={image3} alt='swiperImg'/>
                                <img src={image4} alt='swiperImg'/>
                                <img src={image5} alt='swiperImg'/>
                                <img src={image6} alt='swiperImg'/>
                                <img src={image7} alt='swiperImg'/>
                                <img src={image8} alt='swiperImg'/>
                                <img src={image9} alt='swiperImg'/>
                                <img src={image10} alt='swiperImg'/>
                            </div>
                        </SwiperSlide>
            </Swiper>
      </div>
            </section>
         

        </>
    )
}
export default Card;