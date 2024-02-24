import React, { useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import useShop from "../../hooks/useShop";


const AddProduct = (props) => {
const [shop] = useShop()
console.log(shop)
const {user} = useAuth();
  const axiosPublic = useAxiosPublic();

  const handleAddProduct = (event, id) => {
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


      
      // let sellingPrice = 0;
      // let discountedPrice = 0;
      // let finalPrice = 0;
      // const taxrate = 7.5;
      let discount = 25;
      const newProduct = {
        productName,
        image,
        productQuantity:parseInt(productQuantity),
        productLocation,
        productionCost:parseInt(productionCost),
        profitMargin:parseInt(profitMargin),
        productDescription,
        discount:(discount/100),
       
        // discountedPrice:parseInt((sellingPrice* discount)/100),
        // finalPrice:parseInt(sellingPrice - discountedPrice)


       
      }

      const cost = parseInt(productionCost) * (7.5 / 100);
      console.log(cost)
      const profit = parseInt(productionCost) * (parseInt(profitMargin) / 100);

      const sellingPrice = parseInt(productionCost) + cost + profit;

      // const profitAmount = productionCost * profitMargin;
      // const sellingPrice = productionCost + 7.5% + profitAmount;
      

      console.log(newProduct);

      const shopId = shop._id; // Replace with actual shop ID from user database
      const shopName = "Elegance Couture"; // Replace with actual shop name from user database
      const userEmail = user?.email; // Replace with actual user email from Firebase

      const currentDate = new Date();
      const productObject = {
        shopId,
        shopName,
        userEmail,
        sellingPrice,
        productAddedDate: currentDate.toISOString(),
        saleCount: 1,
        ...newProduct,
      };
      console.log(productObject)

      axiosPublic.post("/addProduct", productObject)
      .then(res=>{console.log(res.data)
        if(res.data.insertedId){
          toast('Product Added Successfully')
  
        }
      })
     
    
    
    }
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold text-center">Add Product</h2>
      <form onSubmit={handleAddProduct}>
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
              />
            </label>
          </div>
          {/*  */}
        </div>
        <div className="md:flex">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Shop Location</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="productLocation"
                placeholder="Product Location"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Production Cost</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                placeholder="Production Cost"
                name="productionCost"
                className="input input-bordered w-full"
                // defaultValue={user?.email}
              />
            </label>
          </div>
        </div>

        <div className="md:flex">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Profit Margin</span>
            </label>
            <label className="input-group">
              <input
                type="number"
                name="profitMargin"
                placeholder="profitMargin"
                className="input input-bordered w-full"
                // defaultValue={user?.displayName}
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
                type="number"
                placeholder="discount"
                name="discount"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <div className="">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Product Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="description"
                name="productDescription"
                className="input input-bordered w-full"
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
          name="AddProduct"
          value="Add Product"
        />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

AddProduct.propTypes = {};

export default AddProduct;
