"use client";
import useSizeAndColor from "@/app/Store/SizeAndColor";
import { ProductSize } from "@/app/types";
import React, { useState } from "react";
interface ISizeSelect {
  size: ProductSize[];
}
const SizeSelect: React.FC<ISizeSelect> = ({ size }) => {
  const [sizeSelected, setSizeSelected] = useState<undefined | string>(
    undefined
  );
  const { setSize } = useSizeAndColor();
  const changeSizeHandler = (size: ProductSize) => {
    setSizeSelected(size.id);
    setSize(size.name);
  };
  return (
    <div className=" py-4 flex flex-wrap gap-1 items-center border-t-2 border-ec-gray">
      {size?.map((size,index) => {
        return (
          <button
          key={size.id}
            className={`  rounded-full px-4 py-2 ${
              sizeSelected === size.id ? "bg-black text-white" : "bg-ec-gray"
            }`}
            onClick={() => changeSizeHandler(size)}
          >
            {size.name}
          </button>
        );
      })}
    </div>
  );
};

export default SizeSelect;
