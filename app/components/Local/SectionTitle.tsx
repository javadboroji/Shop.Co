import React from "react";
interface SectionTitleProps {
  text: string;
}
const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
  return <h3 className="font-bold text-3xl text-center">{text}</h3>;
};

export default SectionTitle;
