import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { callAPI } from "../utils/CallAPI";
import ProductDetails from "./ProductDetails";

const SearchRes = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null);

  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");
    console.log(category);
    callAPI(`data/search.json`).then((searchResults) => {
      const categoryResults = searchResults.data[category];
      if (searchTerm) {
        const results = categoryResults?.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(results);
      } else {
        setProducts(categoryResults);
      }
    });
  };

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  return (
    <div className=" m-auto">
      {products?.length > 0 &&
        products.map((product, i) => {
          return (
            <Link key={i} to={`/product/${product.id}`}>
              <div className="grid grid-cols-12 h-[250px] mt-1  rounded pv:flex pv:flex-col pv:mb-20">
                <div className="col-span-2 bg-gray-200">
                  <img className="m-auto h-[240px] p-4" src={product.image_small} alt=""/>
                </div>
                <div className="col-span-10 bg-gray-50 border-gray-100 hover:bg-gray-100 pv:text-center">
                  <div className="font-medium text-black p-2">
                      <ProductDetails product={product} rate={false}/>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default SearchRes;
