import React from 'react';
import PropTypes from 'prop-types';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useProduct = props => {
    const axiosSecure = useAxiosSecure();
    const {user} = useAuth();
     const { refetch, data:product=[]} = useQuery({
         queryKey:['product',user?.email],
         queryFn: async ()=>{
             const res = await axiosSecure.get(`/products?email=${user.email}`)
             // console.log(res.data)
             return res.data
            
         }
     })
     return [product,refetch]
};

useProduct.propTypes = {
    
};

export default useProduct;