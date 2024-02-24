import React from 'react';
import PropTypes from 'prop-types';
import FeaturedProducts from './FeaturedProducts';
import Banner from './Banner';
import SpecialSectionOne from './SpecialSectionOne';
import SpecialSectionTwo from './SpecialSectionTwo';

const Home = props => {
    return (
        <div>
            <Banner></Banner>
            <FeaturedProducts className="mt-[500px]"></FeaturedProducts>
            <SpecialSectionOne className="mt-[500px]"></SpecialSectionOne>
            <SpecialSectionTwo className="mt-[500px]" ></SpecialSectionTwo>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;