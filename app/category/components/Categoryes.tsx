"use client";
import useProductFilter from "@/app/Store/ProductFilter";
import { category } from "@/app/types";
import { fetchData, FetchDataArg } from "@/lib/fetchData";
import React, { useEffect, useState } from "react";

function Categoryes() {
  const [categoryes, setCategoryes] = useState<category[] | []>([]);
  const{setFilterCat }= useProductFilter()
  const getCategoryes = async () => {
    const params: FetchDataArg = {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/product/getCategory`,
      method: "get",
      cache: "force-cache",
    };
    const data = await fetchData(params);
    setCategoryes(data.data);
  };

  const categoreyHandler=(category:category)=>{
    
    setFilterCat(category);
  }
  useEffect(() => {
    getCategoryes();
  }, []);

  
  return (
    <div className="flex flex-col justify-between px-2">
      {categoryes?.map((cat) => {
        return <button className="py-2" key={cat.id} onClick={()=>categoreyHandler(cat)}>{cat.name}</button>;
      })}
    </div>
  );
}

export default Categoryes;
