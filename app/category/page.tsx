import React from "react";
import { FiFilter } from "react-icons/fi";
import EccomerceLayout from "../EccomerceLayout";
import MainComponentWrap from "../components/Local/MainComponentWrap";
import Categoryes from "./components/Categoryes";
import Price from "./components/Price";
import Colors from "./components/Colors";
import Size from "./components/Size";
import FilterApply from "./components/FilterApply";

function category() {
  return (
    <EccomerceLayout>
      <MainComponentWrap>
        <div className="container mx-auto my-4">
          <div className="flex">
            <div className="lg:w-[20%] border-[1px] rounded-xl p-3">
              <div className="flex items-center justify-between border-b-2 py-3 border-gray-100">
                <span> Filters</span>
                <FiFilter />
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
            <div className="flex flex-1"></div>
          </div>
        </div>
      </MainComponentWrap>
    </EccomerceLayout>
  );
}

export default category;
