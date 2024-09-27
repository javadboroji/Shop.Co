import React from "react";
import EccomerceLayout from "../EccomerceLayout";
import MainComponentWrap from "../components/Local/MainComponentWrap";
import SectionTitle from "../components/Local/SectionTitle";
import CartProducts from "./components/CartProducts";
import OrderSummury from "./components/OrderSummury";

function cart() {
  return (
    <EccomerceLayout>
      <MainComponentWrap>
        <div className="container mx-auto">
          <SectionTitle text="Your Cart" />
          <div className="flex flex-col lg:flex-row justify-between py-4">
            <div className="lg:w-[60%] my-2">
              <CartProducts />
            </div>
            <div className="lg:w-[39%] my-2">
              <OrderSummury/>
            </div>
          </div>
        </div>
      </MainComponentWrap>
    </EccomerceLayout>
  );
}

export default cart;
