"use client";
import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import Categoryes from "./Categoryes";
import Price from "./Price";
import Colors from "./Colors";
import Size from "./Size";
import FilterApply from "./FilterApply";

function FilterSideBar() {
  const [showFilters, setshowFilters] = useState(false);
  const onClickFilter = () => {
    setshowFilters((prev) => !prev);
  };
  return (
    <>
      
        <div className="lg:hidden sticky z-30 top-[13%] left-[90%]  w-8 h-8 bg-white rounded-full flex justify-center items-center shadow-lg">
          <FiFilter onClick={() => onClickFilter()} />
        </div>
      
      <div
        className={`lg:w-[20%] w-[98%] left-4 h-full z-10 top-[1%] bg-white border-[1px] rounded-xl p-3 absolute lg:sticky ${
          showFilters ? "block" : "hidden lg:block"
        }`}
      >
        <div className="flex items-center justify-between border-b-2 py-3 border-gray-100">
          <span> Filters</span>
          <FiFilter className="hidden lg:block" />
        </div>
        <div className="flex items-center justify-between border-b-2 py-3 border-gray-100">
          <Categoryes />
        </div>
        <div className="flex items-center justify-between border-b-2 py-3 border-gray-100">
          <Price />
        </div>
        <div className="flex items-center justify-between border-b-2 py-3 border-gray-100">
          <Colors />
        </div>
        <div className="flex items-center justify-between  border-b-2 py-3 border-gray-100">
          <Size />
        </div>
        <div className="flex items-center justify-between   py-3 border-gray-100">
          <FilterApply />
        </div>
      </div>
    </>
  );
}

export default FilterSideBar;
