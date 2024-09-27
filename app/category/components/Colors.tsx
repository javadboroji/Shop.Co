"use client";
import { fetchData, FetchDataArg } from "@/lib/fetchData";
import React, { useEffect, useState } from "react";

function Colors() {
  const [colors, setColors] = useState<string[] | []>([]);
  const getColors = async () => {
    const params: FetchDataArg = {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/getColors`,
      method: "get",
      cache: "force-cache",
    };
    const data = await fetchData(params);
    setColors(data.data);
  };
  useEffect(() => {
    getColors();
  }, []);
  return (
    <div className="w-full flex flex-col">
      <span className="font-bold"> Colors</span>
      <div className="flex items-center flex-wrap">
        {colors?.map((color ,i )=>{
            return <button style={{background:color}} className="rounded-full w-8 h-8 m-1 border-[1px] border-gray-100" key={`color-${i}`}></button>
        })}
      </div>
    </div>
  );
}

export default Colors;
