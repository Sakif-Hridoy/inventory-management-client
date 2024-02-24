import React from 'react';
import PropTypes from 'prop-types';
import image1 from "../assets/collection-item1.jpg"
import image2 from "../assets/collection-item2.jpg"
import image3 from "../assets/collection-item3.jpg"
import './SpecialSectionOne.css'


const SpecialSectionOne = props => {
    return (
        <div className='mt-30'>
            <div className='flex gap-4'>
                <div>
                    <p className='casual'>Casual Collection</p>
                    <h2 className='text-5xl font-extrabold street'>Street <br /> Wear</h2>
                    <img className='mt-20 rounded-lg' src={image1} alt="" />
                </div>

                <div>
                    <h2 className='text-5xl font-extrabold shoe1'>25% off Basic <br /> Shoes</h2>
                    <img className='mt-20' src={image2} alt="" />
                    <h2 className='text-5xl font-extrabold shoe2'>Woolen <br /> Hat</h2>
                    <img className='mt-8' src={image3} alt="" />

                </div>
            </div>
        </div>
    );
};

SpecialSectionOne.propTypes = {
    
};

export default SpecialSectionOne;