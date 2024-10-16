"use client";
import useProductFilter from "@/app/Store/ProductFilter";
import { ProductSize } from "@/app/types";
import { fetchData, FetchDataArg } from "@/lib/fetchData";
import React, { useEffect, useState } from "react";

function Size() {
  const [sizes, setSizes] = useState<ProductSize[] | []>([]);
  const [sizeActive, setSizeActive] = useState<ProductSize | null>(null);
  const { setFilterSize } = useProductFilter();

  const SizeSelect = (size: ProductSize) => {
    setFilterSize(size);
    setSizeActive(size);
  };

  const getSizes = async () => {
    const params: FetchDataArg = {
      url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/product/getSize`,
      method: "get",
      cache: "force-cache",
    };
    const data = await fetchData(params);
    setSizes(data.data);
  };

  useEffect(() => {
    getSizes();
  }, []);
  return (
    <div className="w-full flex flex-col">
      <span className="font-bold"> Sizes</span>
      <div className="flex items-center flex-wrap">
        {sizes?.map((size) => {
          return (
            <button
              onClick={() => SizeSelect(size)}
              key={size.id}
              className={`  rounded-full px-4 py-2 m-1 ${
                sizeActive?.id === size.id
                  ? "bg-black text-white"
                  : "bg-ec-gray"
              }`}
            >
              {size.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Size;
