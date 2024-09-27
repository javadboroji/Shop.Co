"use client";
import useAddToBasket from "@/app/Store/AddToBasket";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiFillDelete, AiTwotoneDelete } from "react-icons/ai";

function CartProducts() {
  const { products, updateStore,removeProduct } = useAddToBasket();
  const changeCount = (type: string, id: string, count: number) => {
    if (type === "increase") {
      updateStore(id, count + 1);
    } else {
      updateStore(id, count - 1);
    }
  };
  const removieProduct=(id:string)=>{
    removeProduct(id)
  }
  useEffect(() => {}, [products]);

  return (
    <div className="rounded-[8px] border-[1px] border-gray-100">
      {products?.map((product) => {
        return (
          <div
            key={product._id}
            className="flex p-3 border-b-[1px] border-gray-100"
          >
            <div className="lg:w-[20%]">
              <Image src={product.image} alt="product" className="rounded-xl" />
            </div>
            <div className="flex-1 flex flex-col justify-between px-4">
              <div className="flex items-center justify-between">
                <span className="font-bold text-start">{product.title}</span>
                <button onClick={()=>removieProduct(product._id as string)}>
                  <AiFillDelete size={18} color="red" />
                </button>
              </div>
              <div className="flex items-center">
                <span>Size:</span>
                <span className="mx-2">{product.size}</span>
              </div>
              <div className="flex items-center">
                <span>Color:</span>
                <span
                  className="w-4 h-4 flex mx-2 rounded-full"
                  style={{ backgroundColor: product.color }}
                ></span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-bold">${product.price}</span>
                <div className=" flex items-center justify-between bg-ec-gray rounded-full w-[30%] lg:w-[20%]">
                  <button
                    onClick={() =>
                      changeCount(
                        "decrease",
                        product._id as string,
                        product.count
                      )
                    }
                    className="font-bold p-1 text-xl w-fit ms-2"
                  >
                    -
                  </button>
                  <span className="font-bold text-xl w-fit">
                    {product.count}
                  </span>
                  <button
                    onClick={() =>
                      changeCount(
                        "increase",
                        product._id as string,
                        product.count
                      )
                    }
                    className="font-bold p-1 text-xl w-fit me-2"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartProducts;
