import React from 'react';
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useManager = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure();
    const {data:isManager,isPending:isManagerLoading} = useQuery({
        queryKey:[user?.email,'isManager'],
        queryFn:async()=>{
            const res = await axiosSecure.get(`/users/manager/${user.email}`)
            console.log(res.data)
            return res.data?.manager;
        }
    })
    return [isManager]
};

export default useManager;