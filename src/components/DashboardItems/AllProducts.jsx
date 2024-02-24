import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { axiosSecure } from '../../hooks/useAxiosSecure';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useProduct from '../../hooks/useProduct';

const AllProducts = props => {

    const [products,setProducts] = useState([]);
    const [product,refetch] = useProduct();

    useEffect(()=>{
        axiosSecure.get('/products')
        .then(res=>{
            setProducts(res.data)
        })
    },[])

    const handleDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.delete(`/products/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
  
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            } 
          });
        }
      });
    };

    return (
        <div>
            <div className="flex justify-evenly my-4">
        <h2>All Products</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Product Image</th>
              <th>Product Quantity</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {products.map((product, index) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td>{product.productName}</td>
                <td>{product.image}</td>
                <td>{product.productQuantity}</td>
                <td><Link to={`/dashboard/updateProduct/${product._id}`}>Update</Link></td>
                <td>
                <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-ghost btn-xs"
                  >
                    <FaTrashAlt className='text-red-600'></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
        </div>
    );
};

AllProducts.propTypes = {
    
};

export default AllProducts;