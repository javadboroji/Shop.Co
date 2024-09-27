import React from "react";
interface ICButton {
  title: string;
  type?: "outline" | "fill";
  textColor?:string
}
const CButton: React.FC<ICButton> = ({ title, type = "outline" }) => {
  return (
    <button className="bg-transparent my-3 px-6 py-1 mx-auto flex rounded-[1rem] border-2 border-ec-gray">
      {title}
    </button>
  );
};

export default CButton;
