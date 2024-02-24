// import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";
// import { AuthContext } from "../../../providers/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import { AuthContext } from "../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import { axiosPublic } from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useCart from "../hooks/useCart";
import useShop from "../hooks/useShop";


const Navbar = (props) => {
  const [noShop,setNoShop] = useState()
  const [cart] = useCart();
  const {user,logOut} = useAuth()
  const [shop] = useShop()
  
  useEffect(()=>{
    axiosPublic.get(`/shops?email=${user?.email}`)
    // axiosPublic.get('/shops')
    .then(res=>setNoShop(res.data))
  },[])
  console.log(noShop)
  // const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .then((err) => console.log(err));
  };

  const navOptions = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      {

         user && noShop?.length ? <><li>
         <NavLink to="/dashboard">Dashboard</NavLink>
       </li></> : <><li><NavLink to="/createShop">Create Shop</NavLink></li></>
       
}




      <li>
        <Link to="/dashboard/cart">
          <button className="btn btn-sm mt-[-5px]">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-secondary">{cart.length}</div>
          </button>
        </Link>
      </li>
    </>





  );

  return (
    <div className="mt-10">
      <div className="navbar bg-slate-500 fixed z-10 mt-[-72px] text-white w-[1217px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-amber-700 rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Arctic Fashion</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <button className="btn btn-ghost">{user.displayName}</button>
              <img className="w-[50px]" src={user.photoURL} alt="" />
              <button onClick={handleLogOut} className="btn btn-ghost">
                Log Out
              </button>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
