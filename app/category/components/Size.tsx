"use client";
import { ProductSize } from "@/app/types";
import { fetchData, FetchDataArg } from "@/lib/fetchData";
import React, { useEffect, useState } from "react";

function Size() {
  const [sizes, setSizes] = useState<ProductSize[] | []>([]);
  const getSizes = async () => {
    const params: FetchDataArg = {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/getSize`,
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
        {sizes?.map((size)=>{
            return <button key={size.id} className="bg-gray-100 rounded-full text-black p-2 m-1">{size.name}</button>
        })}
      </div>
    </div>
  );
}

export default Size;
