"use client";
import React, { useEffect } from "react";
import { Slider } from "antd";
import useProductFilter from "@/app/Store/ProductFilter";
function Price() {
  const {setFilterPrice}=useProductFilter()
  const changevalue=(value:[number,number])=>{
    setFilterPrice(value);
    
  }

  
  return (
    <div className="flex flex-col w-full">
      <span className="font-bold"> Price</span>
      <div className="flex items-center">
        <span className="text-sm px-1"> $100</span>
        <Slider
          className="w-full"
          range={{ draggableTrack: true }}
          step={50}
          min={100}
          max={1000}
          defaultValue={[100, 400]}
          onChangeComplete={(value:any)=>changevalue(value)
          }
        />
        <span className="text-sm px-1"> $1000</span>
      </div>
    </div>
  );
}

export default Price;
