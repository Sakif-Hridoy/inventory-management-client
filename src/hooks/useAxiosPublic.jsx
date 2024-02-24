import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';


export const axiosPublic = axios.create({
    baseURL:'http://localhost:5000'
})

const useAxiosPublic = props => {
    return axiosPublic;
};

useAxiosPublic.propTypes = {
    
};

export default useAxiosPublic;