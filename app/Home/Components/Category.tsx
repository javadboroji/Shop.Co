import SectionTitle from "@/app/components/Local/SectionTitle";
import Link from "next/link";
import React from "react";
import image1 from "@/public/image/image 11.png";
import image2 from "@/public/image/image 12.png";
import image3 from "@/public/image/image 13.png";
import image4 from "@/public/image/image 14.png";
import Image from "next/image";
function Category() {
  return (
    <div className="bg-ec-gray p-8 rounded-xl">
      <SectionTitle text="BROWSE BY dress STYLE" />
      <div className="flex flex-wrap   justify-between  max-h-[50rem] overflow-hidden mt-8">
        <div className="bg-white rounded-xl m-2 w-full md:w-[35%] relative">
            <span className="font-bold text-xl absolute top-2 left-2"> Casual</span>
          <Link className="" href={"#"} >
            <Image src={image1} className=" rounded-xl h-full w-full" alt="category" />
          </Link>
        </div>
        <div className="bg-white rounded-xl m-2 w-full md:w-[60%] relative">
        <span className="font-bold text-xl absolute top-2 left-2"> Party</span>
          <Link className=" " href={"#"}>
            <Image src={image2} className="rounded-xl w-full h-full" alt="category" />
          </Link>
        </div>
        <div className="bg-white rounded-xl m-2 w-full md:w-[60%] relative">
        <span className="font-bold text-xl absolute top-2 left-2"> Formal</span>
          <Link className=" " href={"#"}>
            <Image src={image3} className="rounded-xl h-full w-full" alt="category" />
          </Link>
        </div>
        <div className="bg-white rounded-xl m-2 w-full md:w-[35%] relative">
        <span className="font-bold text-xl absolute top-2 left-2"> Gym</span>
          <Link className="" href={"#"}>
            <Image src={image4} className="rounded-xl w-full h-full" alt="category" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Category;
