import React from "react";
interface BasButton {
  title: string;
  hasBg?: boolean;
  type?: "button" | "submit";
}
const BasButton: React.FC<BasButton> = ({ title, hasBg, type }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`p-3 my-4 w-full mx-auto rounded-xl ${
        hasBg ? "bg-black text-white" : ""
      }`}
    >
      {" "}
      {title}
    </button>
  );
};

export default BasButton;
