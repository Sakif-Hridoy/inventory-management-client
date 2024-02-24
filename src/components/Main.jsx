import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
import Footer from "./Footer"
import { axiosPublic } from '../hooks/useAxiosPublic';

const Main = props => {
//     const [shop,setShop] = useState([])

//   useEffect(()=>{
//     axiosPublic.get('/shops')
//     .then(res=>setShop(res.data))
//   },[])
//   console.log(shop)
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

Main.propTypes = {
    
};

export default Main;