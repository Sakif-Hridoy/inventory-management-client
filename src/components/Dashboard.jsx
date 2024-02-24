import React from 'react';
import PropTypes from 'prop-types';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useManager from '../hooks/useManager';


const DashBoard = props => {

    const [isAdmin] = useAdmin();
    const [isManager] = useManager();

    // const isAdmin = true;
    // const isManager = true;
    return (
        <div className='flex'>
            <div className='w-64 min-h-screen bg-slate-400'>
                <ul className='menu p-4'>

                {
                    isAdmin ? <>
                <li><NavLink to="/dashboard/adminStats">Admin Stats</NavLink></li>
                <li><NavLink to="/dashboard/cart">Cart</NavLink></li>
                <li><NavLink to="/dashboard/allShops">All Shops</NavLink></li>
                <li><NavLink to="/dashboard/shopDetails">Shop Details</NavLink></li>
                <li><NavLink to="/dashboard/allProducts">All Products</NavLink></li>
                <li><NavLink to="/dashboard/allCustomers">All Users</NavLink></li>
                    </> : 
                    isManager ?
                    
                    <>
                    
                <div className='divider'></div>
                <li><NavLink to="/dashboard/cart">Cart</NavLink></li>

                <li><NavLink to="/dashboard/addProduct">Add Product</NavLink></li>
                <li><NavLink to="/dashboard/updateProduct/65b4f3864bc8f83443798884">Update Product</NavLink></li>
                <li><NavLink to="/dashboard/allProducts">Product Management</NavLink></li>
                <li><NavLink to="/dashboard/offers">Offers</NavLink></li>
                <li><NavLink to="/dashboard/payment">Payment</NavLink></li>
                <li><NavLink to="/dashboard/salesCollection">Sales Summery</NavLink></li>
                <li><NavLink to="/dashboard/paymentHistory">Payment History</NavLink></li>


                    
                    </> :      
                    
                    <>
                    <div className='divider'></div>
                    <li><NavLink to="/">Home</NavLink></li>


                    </>
                    

                }
              
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

DashBoard.propTypes = {
    
};

export default DashBoard;