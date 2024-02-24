import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AuthContext } from '../providers/AuthProvider';


const useAuth = props => {
   const auth = useContext(AuthContext)
   return auth
};

useAuth.propTypes = {
    
};

export default useAuth;