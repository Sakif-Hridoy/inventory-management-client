import React, { useState } from "react";
import PropTypes from "prop-types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../hooks/useAuth";
import useShop from "../hooks/useShop";

const CreateShop = (props) => {
  const[shop,refetch] = useShop()
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const handleCreateShop = (event, id) => {
    event.preventDefault();

    const form = event.target;

    const name = form.name.value;
    const shopInfo = form.shopInfo.value;
    const location = form.location.value;
    const email = user?.email;
    const ownerName = form.ownerName.value;
    const logo = form.logo.value;

    if (user && user.email) {
      const newShop = {
        name,
        shopInfo,
        location,
        email,
        ownerName,
        logo,
        
      };

      console.log(newShop);

      axiosPublic.post("/createShop", newShop).then((res) => {
        console.log(res.data);
        toast("Shop Created Successfully");

        if(shop.length){
          toast("You Can Create Only One Shop")
        }

        //   axiosPublic.get('/shops')
        // .then(res=>setShop(res.data))

        //   const isExist = shop.find((item) => item._id === id)

        //     axiosPublic.get(`/shops/${id}`)
        //     .then(res=>{
        //       console.log(res.data)
        //       if(isExist){
        //         alert('You Can Create Only One Shop')
        //       }
        //     })
      });
      console.log(shop);
    }
  };

  return (
    <div className="bg-[#F4F3F0] p-24">
      <h2 className="text-3xl font-extrabold text-center">Create Shop</h2>
      <form onSubmit={handleCreateShop}>
        <div className="md:flex">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Shop Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Shop Name"
                className="input input-bordered w-full"
                defaultValue={name}

              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Shop Info</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="Shop Info"
                name="shopInfo"
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
                name="location"
                placeholder="Shop Location"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Shop Owner Email</span>
            </label>
            <label className="input-group">
              <input
                type="email"
                placeholder="Shop Owner Email"
                name="email"
                className="input input-bordered w-full"
                defaultValue={user?.email}
              />
            </label>
          </div>
        </div>

        <div className="md:flex">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Short Owner name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="ownerName"
                placeholder="Shop Owner Name"
                className="input input-bordered w-full"
                defaultValue={user?.displayName}
              />
            </label>
          </div>
        </div>

        <div className="">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Shop Logo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                placeholder="logo"
                name="logo"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <input
          className="btn btn-block bg-slate-600 text-white"
          type="submit"
          name="AddShop"
          value="Add Shop"
        />
      </form>
      <ToastContainer></ToastContainer>
    </div>
  );
};

CreateShop.propTypes = {};

export default CreateShop;
