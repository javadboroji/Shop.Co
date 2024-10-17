import React from "react";
import { FiFilter } from "react-icons/fi";
import EccomerceLayout from "../EccomerceLayout";
import MainComponentWrap from "../components/Local/MainComponentWrap";
import Categoryes from "./components/Categoryes";
import Price from "./components/Price";
import Colors from "./components/Colors";
import Size from "./components/Size";
import FilterApply from "./components/FilterApply";
import ProductResult from "./components/ProductResult";
import FilterSideBar from "./components/FilterSideBar";

function category() {
  return (
    <EccomerceLayout>
      <MainComponentWrap>
        <div className="container mx-auto my-4">
          <div className="flex relative">
            <FilterSideBar />
            <div className="flex flex-1">
              <ProductResult />
            </div>
          </div>
        </div>
      </MainComponentWrap>
    </EccomerceLayout>
  );
}

export default category;
