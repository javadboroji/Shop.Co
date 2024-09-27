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
          <div className="flex justify-between py-4">
            <div className="w-[60%]">
              <CartProducts />
            </div>
            <div className="w-[39%]">
              <OrderSummury/>
            </div>
          </div>
        </div>
      </MainComponentWrap>
    </EccomerceLayout>
  );
}

export default cart;
