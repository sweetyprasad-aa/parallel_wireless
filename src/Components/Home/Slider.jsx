import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slideImg1 from '../../assets/images/hero-city.jpg';
import slideImg2 from '../../assets/images/hero-city_2.jpg';
import './Slider.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Pagination, Navigation } from 'swiper/modules';

const Slider= ()=> {
  return (
    <>
      <div className='hero-slider'>
          <Swiper
            slidesPerView={1}
            // spaceBetween={30}
            loop={true}
            pagination={{
            clickable: true,
          }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper">
            <SwiperSlide><img src={slideImg1} alt='sliderImg'/>
            <div className='container hero-content '>
              <div className='row hero-para'>
                <div>
                  <h1 className='heading'>Reimagine your<br/>
                    <strong className='hero-heading'>NETWORK</strong><br/>Reimagine your<br/>
                      <strong className='hero-heading'>ECONOMICS</strong></h1>
                  <p className=" hero-para2"><strong>Everything you need to know about OpenRAN.</strong><br/>
                    An Ebook from Parallel Wireless.</p>
                    <button className='sliderBtn btn-lg'>Download Now</button>
                </div>
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide><img src={slideImg2} alt='sliderImg'/>
              <div className='container hero-content '>
              <div className='row hero-para'>
                  <p>Bringing the first<strong className='hero-heading'><br/>Open RAN</strong><br/>
                    to Indonesia</p>    
              </div>
              <button className='sliderBtn px-5 py-3'>Learn More</button>
            </div>
            </SwiperSlide>
          </Swiper>
      </div>
    </>
  );
}

export default Slider;