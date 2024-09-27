import Footer from "@/app/components/Local/Footer";
import Header from "@/app/components/Local/Header";
import React from "react";
import EmailBox from "./components/Local/EmailBox";
interface EccomerceLayoutProps {
  children: React.ReactNode;
}
const EccomerceLayout: React.FC<EccomerceLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div className="container mx-auto">
        <EmailBox />
      </div>
      <Footer />
    </>
  );
};

export default EccomerceLayout;
