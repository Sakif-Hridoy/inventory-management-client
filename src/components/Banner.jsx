import React from 'react';
import PropTypes from 'prop-types';
import './Banner.css';
import banner from '../assets/cover.jpg'

const Banner = props => {
    return (
        <div className='mt-10'>
            <div className=''>
            <img className="mx-auto w-[5000px] h-[530px]" src={banner} alt="" />

            </div>
            <h2 className="banner-txt text-2xl md:text-4xl lg:text-5xl font-semibold lg:leading-[10px]">
        Buy Your Favourite Fashion Dresses from  <br /> Arctic Fashion 
      </h2>
      
        </div>
    );
};

Banner.propTypes = {
    
};

export default Banner;