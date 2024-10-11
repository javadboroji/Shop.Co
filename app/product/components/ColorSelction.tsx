"use client";
import useSizeAndColor from "@/app/Store/SizeAndColor";
import React, { useEffect, useState } from "react";
import { TiTick } from "react-icons/ti";
interface IColorSelction {
  colors: string[];
  active: number;
}
const ColorSelction: React.FC<IColorSelction> = ({ active, colors }) => {
  const [selected, setSelected] = useState<undefined | number>(undefined);
  const {  setColor } = useSizeAndColor();

  useEffect(() => {
    setSelected(active);
  }, [active]);

  const changeColor = (index: number,color:string) => {
    setSelected(index);
    setColor(color)
  };
  return (
    <div className="flex flex-col  my-3 border-t-2 border-ec-gray">
      <span className="text-sm text-gray-400 py-2"> Select Colors</span>
      <div className="flex">
        {" "}
        {colors?.map((color, index) => (
          <button
          key={`btn-${index}`}
            className={`w-7 h-7 rounded-full flex justify-center items-center  mx-2`}
            style={{ backgroundColor: color }}
            onClick={() => changeColor(index,color)}
          >
            <span>{index === selected && <TiTick color="white" />}</span>
          </button>
        ))}{" "}
      </div>
    </div>
  );
};

export default ColorSelction;
