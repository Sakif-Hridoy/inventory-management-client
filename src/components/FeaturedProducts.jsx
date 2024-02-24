import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { axiosPublic } from "../hooks/useAxiosPublic";
import ProductCard from "./ProductCard";

const FeaturedProducts = (props) => {
  const [featuredProduct, setFeaturedProduct] = useState([]);
  useEffect(() => {
    axiosPublic.get("/products").then((res) => {
      setFeaturedProduct(res.data);
    });
  }, []);
  return (
    <div>
      <div className="grid grid-cols-3 gap-4">
        {featuredProduct.map((product) => <ProductCard product={product} key={product._key}></ProductCard>)}
      </div>
    </div>
  );
};

FeaturedProducts.propTypes = {};

export default FeaturedProducts;
