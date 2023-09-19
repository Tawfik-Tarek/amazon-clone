import React from "react";
import ProductBage from "./ProductBage";
import ProductRate from "./ProductRate";

const ProductDetails = ({ product, rate }) => {
  return (
    <div className="mb-1">
      <div className="text-xl xl:text-2xl font-medium mb-1 ">{product.title}</div>
      <div className="text-sm xl:text-base mb-1">By<span className="ml-1 text-blue-600">{product.brand}</span></div>
      {
        rate &&<div className="text-xs xl:text-sm mb-1"> <ProductRate  avgRating={product.avgRating} ratings={product.ratings}/></div>
      }
      <div className="text-sm xl:text-base mb-1 "><span className="text-blue-600">{product.avgRating}</span> from 5</div>
      <div className="text-xm xl:text-sm font-bold mb-1">{product.attribute}</div>
      <div> <ProductBage  bage={product.badge}/> </div>
    </div>
  );
};

export default ProductDetails;
