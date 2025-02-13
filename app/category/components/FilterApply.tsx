"use client";
import useProductFilter from "@/app/Store/ProductFilter";
import useProductFilterResult from "@/app/Store/ProductFilterResult";
import { fetchData, FetchDataArg } from "@/lib/fetchData";
import React, { useEffect } from "react";

function FilterApply() {
  const { filters } = useProductFilter();
  const { setProductFilter } = useProductFilterResult();
  const applyFilter = async () => {
    const params: FetchDataArg = {
      url: `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/product/productFilter`,
      method: "post",
      cache: "no-store",
      body: filters,
    };
    const data = await fetchData(params);
    setProductFilter(data.data);
  };
  useEffect(() => {
    applyFilter()
  }, [])
  
  return (
    <div className="w-full">
      <button
        onClick={() => applyFilter()}
        className="flex items-center justify-center bg-black w-full rounded-full text-white px-4 py-2"
      >
        Apply Filter
      </button>
    </div>
  );
}

export default FilterApply;
