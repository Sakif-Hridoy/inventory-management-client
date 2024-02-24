import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import useAdmin from '../hooks/useAdmin';
import useManager from '../hooks/useManager';

const AdminRoute = ({children}) => {
    const {user,loading} = useAuth()
    const [isManager,isManagerLoading] = useManager()
    const location = useLocation();

    if(loading || isManagerLoading){
        return <progress className='progress w-56'></progress>
    }
   if(user && isManager){
    return children
   }
   return <Navigate to="/login" state={{from:location}} replace></Navigate>
};

export default AdminRoute;