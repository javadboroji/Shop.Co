"use client";
import ProductsCard from "@/app/components/Local/ProductsCard";
import useProductFilter from "@/app/Store/ProductFilter";
import useProductFilterResult from "@/app/Store/ProductFilterResult";
import { ProductCard } from "@/app/types";
import React, { useEffect, useState } from "react";

function ProductResult() {
  const { productFilters } = useProductFilterResult();
  const { filters } = useProductFilter();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [productFilters]);
  if (loading) {
    return (
      <div className="container flex mx-auto relative">
        <div role="status" className="absolute top-1/2 left-1/2">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container flex mx-0 lg:mx-auto flex-col mt-16 lg:mt-0">
        <div className="lg:w-full w-[95%] flex flex-wrap items-center bg-gray-300 lg:mx-4 p-3 rounded-xl">
          <span className="bg-black text-white p-2 rounded-lg mx-2">
            size: {filters?.size?.name}
          </span>
          <span className="bg-black text-white p-2 rounded-lg mx-2">
            category: {filters?.category?.name}
          </span>
          <span className=" flex items-center text-white p-2 rounded-lg mx-2">
            color:
            <span
              className="mx-2 block w-8 h-8 rounded-full"
              style={{ background: filters?.color }}
            ></span>
          </span>
          <span className="bg-black text-white p-2 rounded-lg mx-2">
            Price: {filters?.price[0]}$~ {filters.price[1]}$
          </span>
        </div>
        {productFilters.length > 0 ? (
          <div className="flex flex-wrap">
            {productFilters.map((product: ProductCard) => {
              return (
                <div key={product._id} className="w-full md:w-1/2 lg:w-1/3">
                  <ProductsCard
                    title={product.title}
                    price={product.price}
                    rating={product.rating}
                    discountPercentage={product.discountPercentage}
                    discountPrice={product.discountPrice}
                    image={product.image}
                    _id={product._id}
                    color={product.color}
                    size={product.size}
                  />
                </div>
              );
            })}
          </div>
        ) : (
          <h1 className="font-bold text-center p-4"> No products were found</h1>
        )}
      </div>
    );
  }
}

export default ProductResult;
