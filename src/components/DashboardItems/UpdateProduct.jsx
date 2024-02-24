import React, { useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import useShop from "../../hooks/useShop";
import { useLoaderData } from "react-router-dom";

const UpdateProduct = props => {
    const updatedProduct = useLoaderData();
    console.log(updatedProduct)

    const {_id,productName,image,discount,productDescription,productLocation,productQuantity,productionCost,profitMargin,shopName} = updatedProduct;
    const {user} = useAuth();
      const axiosPublic = useAxiosPublic();
    
      const handleUpdateProduct = (event) => {
        event.preventDefault();
    
        if (user && user.email) {
          const form = event.target;
    
          const productName = form.productName.value
          const image = form.image.value
          const productQuantity = form.productQuantity.value
          const productLocation = form.productLocation.value
          const productionCost = form.productionCost.value
          const profitMargin = form.profitMargin.value
          const productDescription = form.productDescription.value
    
          const newProduct = {
            productName,
            image,
            productQuantity,
            productLocation,
            productionCost,
            profitMargin,
            productDescription,
            discount
        }

    
          
    
          console.log(newProduct);
    
         
    
          axiosPublic.put(`http://localhost:5000/products/${_id}`, newProduct)
          .then(res=>{console.log(res.data)
            if(res.data.modifiedCount){
              toast('Product Updated Successfully')
      
            }
          })
         
        
        
        }
      };
    
      return (
        <div className="bg-[#F4F3F0] p-24">
          <h2 className="text-3xl font-extrabold text-center">Update Product</h2>
          <form onSubmit={handleUpdateProduct}>
            <div className="md:flex">
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="productName"
                    placeholder="Product Name"
                    className="input input-bordered w-full"
                    defaultValue={productName}
                  />
                </label>
              </div>
    
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Product Quantity</span>
                </label>
                <label className="input-group">
                  <input
                    type="number"
                    placeholder="Product Quantity"
                    name="productQuantity"
                    className="input input-bordered w-full"
                    defaultValue={productQuantity}

                  />
                </label>
              </div>
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Product Image</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Product Image"
                    name="image"
                    className="input input-bordered w-full"
                    defaultValue={image}
                  />
                </label>
              </div>
              {/*  */}
            </div>
            <div className="md:flex">
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Product Location</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="productLocation"
                    placeholder="Product Location"
                    className="input input-bordered w-full"
                    defaultValue={productLocation}
                  />
                </label>
              </div>
    
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">Production Cost</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="Production Cost"
                    name="productionCost"
                    className="input input-bordered w-full"
                    defaultValue={productionCost}
                  />
                </label>
              </div>
            </div>
    
            <div className="md:flex">
              <div className="form-control md:w-1/2 ml-4">
                <label className="label">
                  <span className="label-text">profitMargin</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    name="profitMargin"
                    placeholder="profitMargin"
                    className="input input-bordered w-full"
                    defaultValue={profitMargin}
                  />
                </label>
              </div>
            </div>
    
            <div className="">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Discount</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="discount"
                    name="discount"
                    className="input input-bordered w-full"
                    defaultValue={discount}
                  />
                </label>
              </div>
            </div>
            <div className="">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">productDescription</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="description"
                    name="productDescription"
                    className="input input-bordered w-full"
                    defaultValue={productDescription}
                  />
                </label>
              </div>
            </div>
    
            {/* <div className="">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">SellingPrice</span>
                </label>
                <label className="input-group">
                  <input
                    type="text"
                    placeholder="sellingPrice"
                    name="sellingPrice"
                    className="input input-bordered w-full"
                    // defaultValue={formData.sellingPrice}
                  />
                </label>
              </div>
            </div> */}
    
            <input
              className="btn btn-block bg-slate-600 text-white"
              type="submit"
              name="UpdateProduct"
              value="Update Product"
            />
          </form>
          <ToastContainer></ToastContainer>
        </div>
      );
};

UpdateProduct.propTypes = {
    
};

export default UpdateProduct;