import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosPublic from '../hooks/useAxiosPublic';
import SocialLogin from './SocialLogin';

const SignUp = props => {
  const axiosPublic = useAxiosPublic()
    const {createUser,updateUserProfile} = useContext(AuthContext)
    const navigate = useNavigate()
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = (data) => {
        createUser(data.email,data.password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser)
            updateUserProfile(data.name,data.photoURL)
            // Save users to database
            .then(()=>{
              const userInfo = {
                name:data.name,
                email:data.email,
              }
              axiosPublic.post('/users',userInfo)
              .then(res=>{
                if(res.data.insertedId){
                  reset();
                  Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 2500
                  });
                  navigate('/')
                }
              })


              console.log('user profile updated')
             
            })
            .catch((error)=>{
              console.log(error)
            })
            
            if(loggedUser){
                alert('User created Successfully')
            }
            
        })
        console.log(data)}


    // const handleSignUp = e =>{
    //     e.preventDefault();
    //     const form = e.target;
    //     const email = form.email.value;
    //     const password = form.password.value;
    //     console.log(email,password)
    //     createUser(email,password)
    //     .then(result=>{
    //       const user = result.user;
    //       console.log(user)
    //     })
    // }
    
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center md:w-1/2 lg:text-left">
            <h1 className="text-5xl font-bold">Sign Up now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' {...register("name",{ required: true })} placeholder="Your name" className="input input-bordered" />
                {errors.name && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input type="text" {...register("photoURL",{ required: true })} placeholder="photo url" className="input input-bordered" />
                {errors.photoURL && <span>This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' {...register("email")} placeholder="Your email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' {...register("password",{ required: true, maxLength: 20,
                pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z])/})}  placeholder="password" className="input input-bordered" required />
                {errors.password?.type==='required' &&<span>Password must be 6 characters</span>}
                {errors.password?.type==='pattern' && <span>password must be one lower case,one uppercase,one number and one special character</span>}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input className="btn btn-primary"  type="submit" value="Sign Up" />
              </div>
            </form>
            <p className='px-6'><small>Already Have Account?</small><Link to="/login">Login</Link></p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    );
};

SignUp.propTypes = {
    
};

export default SignUp;