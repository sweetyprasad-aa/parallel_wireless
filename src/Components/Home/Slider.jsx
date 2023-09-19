import React from 'react';
import slideImg1 from '../../assets/images/hero-city.jpg';
import slideImg2 from '../../assets/images/hero-city_2.jpg';
import './Slider.css';

const Slider= ()=> {
  return (
    <>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={slideImg1} className ="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <div className='row hero-para text-start text-dark'>
                <div>
                  <h1 className='heading'>Reimagine your<br/>
                    <strong className='hero-heading'>NETWORK</strong><br/>Reimagine your<br/>
                      <strong className='hero-heading'>ECONOMICS</strong></h1>
                  <p className=" hero-para2"><strong>Everything you need to know about <br/> OpenRAN.</strong><br/>
                    An Ebook from Parallel Wireless.</p>
                    <button className='sliderBtn btn-lg'>Download Now</button>
                </div>
              </div>
              </div>
            </div>
            <div className="carousel-item">
              <img src={slideImg2} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                <div className='row hero-para text-start text-dark'>
                  <div>
                  <p className=" hero-para2">Bringing the first<strong className='hero-heading'><br/>Open RAN</strong><br/>
                    to Indonesia</p> 
                    <button className='sliderBtn btn-lg'>Learn More</button>   
                </div>  
            </div>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
      </div>

    </>
  );
}

export default Slider;