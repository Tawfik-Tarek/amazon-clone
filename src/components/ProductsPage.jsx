import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { callAPI } from "../utils/CallAPI";
import ProductDetails from "./ProductDetails";
import { GB_CURRENCY } from "../utils/Constans";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cart";
const ProductsPage = () => {
  const dispatch = useDispatch();
  const [quntity, setQuntity] = useState(1);
  const id = useParams().id;
  const [product, setProduct] = useState([]);

  const getProduct = () => {
    callAPI("data/products.json").then((products) => {
      setProduct(products.data[id]);
    });
  };

  useEffect(() => {
    getProduct();
  }, []);
  if (!product?.image) {
    return (
      <div className="text-center pt-2 text-amazon-yellow font-bold">
        Loading...
      </div>
    );
  }
  return (
    product && (
      <div className=" bg-amazon-background">
        <div className="m-auto  max-w-[100%] p-4 pv:bg-white pv:p-0 pv:px-4">
          <div className="grid grid-cols-10 gap-2 pv:flex pv:flex-col pv:items-center">
            <div className="col-span-3 bg-white p-8 rounded ps:p-1 pv:p-0 pv:px-8">
              <img
                className="pv:w-[70%] pv:m-auto"
                src={`${product.image}`}
                alt=""
              />
            </div>
            <div className="col-span-5 p-4 rounded divide-y bg-white">
              <div className="mb-3">
                <ProductDetails product={product} rate={true} />
              </div>
              <div className="text-base xl:text-lg mt-1">
                {product.description}
              </div>
            </div>
            <div className="col-span-2 bg-white p-4 w-[100%] pv:p-0 pv:px-4">
              <div className="text-xl xl:text-2xl font-semibold text-red-500 text-right">
                {GB_CURRENCY.format(product.price)}
              </div>
              <div className="text-base xl:text-lg font-semibold text-gray-500 text-right">
                RRP:{" "}
                <span className="line-through">
                  {GB_CURRENCY.format(product.oldPrice)}
                </span>
              </div>
              <div className="text-sm xl:text-base font-semibold text-blue-600 mt-3">
                FREE Returns
              </div>
              <div className="text-sm xl:text-base font-semibold text-blue-600 mt-1">
                FREE Dekivery
              </div>
              <div className="text-base xl:text-lg font-semibold text-green-700 mt-1">
                In Stock
              </div>
              <div className="text-base xl:text-lg mt-1 ">
                Quntity :
                <select
                  className="rounded-md border-none focus:border focus:border-indigo-500 bg-white outline-none"
                  onChange={(e) => {
                    setQuntity(e.target.value);
                  }}
                >
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                  <option value={3}>3</option>
                </select>
              </div>
              <button
                type="button"
                className="rounded-lg bg-amazon-yellow text-white font-semibold border p-3 mt-3 hover:bg-yellow-500 transition-all w-full"
                onClick={() => {
                  Array.from({ length: quntity }, (_, i) => {
                    dispatch(addToCart(product));
                  });
                }}
              >
                ADD To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductsPage;
