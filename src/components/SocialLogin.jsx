import React from 'react';
import PropTypes from 'prop-types';
import { FaGoogle } from 'react-icons/fa';

// import { axiosPublic } from '../../hooks/useAxiosPublic';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import { axiosPublic } from '../hooks/useAxiosPublic';

const SocialLogin = props => {
    const {googleSignIn} = useAuth()
    const from = location.state?.from?.pathname || "/"

    const navigate = useNavigate()
    const handleGoogleSignIn = ()=>{
        googleSignIn()
        .then(res=>{
            console.log(res.user)
            const userInfo = {
                email:res.user.email
            }
            // save users to database
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data)
                navigate(from,{replace:true});
            })

        })
    }
    return (
        <div>
            <div>
            <button onClick={handleGoogleSignIn} className="btn">
 <FaGoogle></FaGoogle>
  Sign In with Google
</button>
            </div>
        </div>
    );
};

SocialLogin.propTypes = {
    
};

export default SocialLogin;