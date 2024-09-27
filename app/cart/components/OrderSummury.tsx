"use client";
import useAddToBasket from "@/app/Store/AddToBasket";
import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

function OrderSummury() {
  const { products } = useAddToBasket();
  const [subTotla, setSubTotla] = useState(0);
  const [totlaVlaue, setTotlaVlaue] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [discountValue, setDiscountValue] = useState<undefined | string>(
    undefined
  );
  const Delivery = products.length > 0 ? 1500 : 0;
  const discountString = "off";
  //const totlaVlaue=Delivery + subTotla
  const sunTotalFn = () => {
    let subTotlaBasket = 0;
    products.forEach((product) => {
      const result = product.price * product.count;
      subTotlaBasket += result;
    });
    setSubTotla(subTotlaBasket);
  };
  const discountChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscountValue(e.target.value);
  };
  const discountApply = () => {
    //after value dynamic
    if (discountValue && discountValue === discountString) {
      const result = (totlaVlaue * 10) / 100;
      setDiscount(result);
      setTotlaVlaue(result);
    }
  };

  useEffect(() => {
    sunTotalFn();
  }, [products]);
  useEffect(() => {
    setTotlaVlaue(() => Delivery + subTotla);
  }, [subTotla]);

  return (
    <div className="rounded-xl border-[1px] border-gray-100 p-4">
      <h3 className="font-bold"> Order Summury</h3>
      <div className="flex flex-col">
        <div className="flex justify-between py-2">
          <span> Subtotal</span>
          <span className="font-bold"> ${subTotla}</span>
        </div>
        <div className="flex justify-between  py-2">
          <span> Discount (10%)</span>
          <span className="text-red-500 font-bold"> ${discount}</span>
        </div>
        <div className="flex justify-between  py-2 border-b-2 border-gray-100">
          <span> Delivery Fee </span>
          <span className="font-bold"> ${Delivery}</span>
        </div>
        <div className="flex justify-between  py-2">
          <span> Total </span>
          <span className="font-bold"> ${totlaVlaue}</span>
        </div>
        <div className="flex items-center justify-between my-2">
          <div className="flex-1 me-3">
            <input
              className="bg-gray-100 w-full rounded-xl  py-2 px-4"
              value={discountValue}
              onChange={(e) => discountChangeHandler(e)}
              placeholder="Add promo code"
            />
          </div>
          <div className="w-[25%] flex justify-end">
            <button
              onClick={() => discountApply()}
              className="bg-black w-full rounded-full text-white px-4 py-2"
            >
              Apply
            </button>
          </div>
        </div>
          <div className="w-full my-2">
          <button
              className="flex items-center justify-center bg-black w-full rounded-full text-white px-4 py-2"
            >
              Go to Checkout
              <FaArrowRight className="mx-2"/>
            </button>
          </div>
      </div>
    </div>
  );
}

export default OrderSummury;
