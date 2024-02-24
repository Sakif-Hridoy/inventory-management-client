import React from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import useAxiosSecure, { axiosSecure } from '../hooks/useAxiosSecure';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAuth from '../hooks/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../hooks/useCart';

const ProductCard = ({product}) => {
    const {_id,image,productName,productDescription,sellingPrice} = product;

    const {user} = useAuth();
    const navigate = useNavigate();
    const location = useLocation()
    const axiosSecure = useAxiosSecure()
    const[,refetch] = useCart()




    const handleAddToCart=(product)=>{
        if(user && user.email){
          const cartItem = {
            menuId: _id,
            email:user.email,
            productName,
            image,
            sellingPrice
          }
  
          axiosSecure.post('/carts',cartItem)
          .then(res=>{console.log(res.data)
            if(res.data.insertedId){
              toast('Product Added To Cart Succsessfully')
              refetch()
            }
          
          })
  
         
        }
        else{
          Swal.fire({
            title: "You Are Not Logged In",
            text: "Please Login To Add Products To Cart",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Login"
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/login",{state:{from:location}})
            }
          });
        }
      }

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={image} />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">{productName}</h2>
              <p>{productDescription}</p>
              <p>${sellingPrice}</p>
              <div className="card-actions">
                <button onClick={()=>{handleAddToCart(product)}} className="btn btn-primary">Add To Cart</button>
              </div>
            </div>
          </div>
          <ToastContainer></ToastContainer>
        </div>
    );
};

ProductCard.propTypes = {
    
};

export default ProductCard;