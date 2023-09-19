import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import Search from "./Search";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartLength = useSelector((state) => state.cart.length);
  return (
    <header className="max-w-[100%] ">
      <nav className="flex bg-amazon text-white h-[60px] pr:justify-between">
        <div className="flex items-center m-4">
          <Link to={"/"}>
            <img
              className="hover:cursor-pointer h-[35px] w-[100px] m-2"
              src="../images/amazon.png"
              alt=""
            />
          </Link>
          <div className="pr-4 pl-4">
            <div className="text-xs xl:text-sm">Deliver to</div>
            <div className="font-bold text-xs xl:text-base">Egypt</div>
          </div>
        </div>
        <div className="flex grow relative items-center pr:hidden">
          <Search />
        </div>
        <div className="flex items-center m-4 ">
          <div className="pr-4 pl-4 pr:hidden">
            <div className="text-xs xl:text-sm">Hello , sign in</div>
            <div className="font-bold text-xs xl:text-base">
              Accounts & Lists
            </div>
          </div>
          <div className="pr-4 pl-4 pr:hidden">
            <div className="text-xs xl:text-sm">Returns</div>
            <div className="font-bold text-xs xl:text-base">& Orders</div>
          </div>
          <div className="pl-3 pr-3 flex">
            <Link to={"/checkout"}>
              <ShoppingCartIcon className="h-[48px]" />
              <div className="relative">
                  <div className="absolute left-[20px] top-[-39px] font-bold text-amazon-yellow text-sm">
                    {cartLength}
                  </div>
              </div>
            </Link>
            <div className="text-xs xl:text-sm mt-7 font-bold">Cart</div>
          </div>
        </div>
      </nav>
      <div className="hidden grow relative items-center  pr:flex">
        <Search />
      </div>
      <div className="flex bg-amazon-lightblue text-white text-xs xl:text-sm space-x-3 p-2 pl-6">
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </header>
  );
};

export default Navbar;
