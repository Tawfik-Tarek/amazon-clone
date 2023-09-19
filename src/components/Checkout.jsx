import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { deleteFromCart, minsQuntity, addToCart } from "../store/slices/cart";
import { GB_CURRENCY } from "../utils/Constans";

const Checkout = () => {
  const products = useSelector((state) => state.cart);
  const total = useSelector((state) =>
    state.cart.reduce((total, product) => {
       total += product.price * product.quntity;
       return total;
    },0)
  );
  const dispatch = useDispatch();
  return (
    <div className="h-screen bg-amazon-background">
      <div className="w-full m-auto p-8 pr:p-0">
        <div className="grid grid-cols-8 bg-white gap-10 pr:flex pr:justify-center ">
          <div className="col-span-6 pr:flex pr:flex-col pr:items-center">
            <div className="text-2xl xl:text-3xl m-4">Shopping Cart</div>
            {products.map((product) => {
              return (
                <div className="pr:mb-8 pr:flex" key={product.id}>
                  <div className="grid grid-cols-12 divide-y divide-gray-400 pr:block">
                    <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400 pr:flex pr:flex-col pr:text-center pr:items-center">
                      <div className="col-span-2">
                        <Link to={`/product/${product.id}`}>
                          <img
                            className="m-auto p-4"
                            src={product.image_small}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="col-span-6">
                        <div className="font-medium text-black mt-2">
                          <Link to={`/product/${product.id}`}>
                            <ProductDetails product={product} rate={false} />
                          </Link>
                        </div>
                        <div>
                          <button
                            className="rounded-lg bg-red-500 text-white font-semibold border p-3 mt-3 hover:bg-red-600 transition-all w-[100px]"
                            onClick={() => dispatch(deleteFromCart(product))}
                          >
                            Delete
                          </button>
                          <div className="grid grid-cols-3 items-center mt-4 w-[100px] pr:mx-auto pr:flex">
                            <div
                              className="rounded cursor-pointer bg-gray-300 text-black p-4 m-auto"
                              onClick={() => {
                                product.quntity >1 ?dispatch(minsQuntity(product)) :dispatch(deleteFromCart(product));
                              }}
                            >
                              -
                            </div>
                            <div className="mx-auto">{product.quntity}</div>
                            <div
                              className="rounded cursor-pointer bg-gray-300 text-black p-4 m-auto"
                              onClick={() => dispatch(addToCart(product))}
                            >
                              +
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-2 pr:hidden">
                      <div className="font-semibold">
                        {GB_CURRENCY.format(product.price)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="text-right">
              Subtotal ({products.length} items) 
              <span className="font-semibold"> {GB_CURRENCY.format(total)}</span>
            </div>
          </div>

          <div className="col-span-2 bg-white rounded h-[250px] p-7 pr:hidden">
            <div className="text-xs xl:text-sm text-green-800 mb-2">
              Your order qualifies for
              <span className="font-bold">FREE DELIVERY</span>. Delivery Details
            </div>
            <div className="text-base xl:text-lg mb-4">
              Subtotal ({products.length} items):
              <span className="font-semibold">
                {GB_CURRENCY.format(total)}
              </span>
            </div>
            <button className="bg-yellow-400 w-full p-3 text-xs xl:text-sm rounded hover:bg-yellow-500 mt-3">Proceed to Checkout</button>
          </div>
        </div>
        </div>
      </div>
  );
};

export default Checkout;
