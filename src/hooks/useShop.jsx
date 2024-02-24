import React from 'react';
import PropTypes from 'prop-types';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useShop = props => {
    const axiosSecure = useAxiosSecure();
   const {user} = useAuth();
    const { refetch, data:shop=[]} = useQuery({
        queryKey:['shop',user?.email],
        queryFn: async ()=>{
            const res = await axiosSecure.get(`/shops`)
            console.log(res.data)
            return res.data
           
        }
    })
    return [shop,refetch]
};

useShop.propTypes = {
    
};

export default useShop;