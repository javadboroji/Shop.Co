import Link from "next/link";
import React from "react";
import SiteLogo from "./SiteLogo";
import image1 from "@/public/image/ Pay.png"
import image2 from "@/public/image/Visa.png"
import image3 from "@/public/image/Paypal.png"
import image4 from "@/public/image/Mastercard.png"
import image5 from "@/public/image/G Pay.png"
import { FaFacebookF, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";

function Footer() {
  return (
    <div className="bg-ec-gray p-8 pt-24 pb-12">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row p-4">
          <div className="lg:w-1/5 me-16">
            <SiteLogo />
            <p className=" p-4">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
            <div className="flex justify-between ms-0 mx-8 xl:me-16">
              <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
                <FaTwitter />
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
                <FaFacebookF />
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
                <FaInstagram />
              </div>
              <div className="w-8 h-8 rounded-full bg-white flex justify-center items-center">
                <FaGithub />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap justify-between flex-1">
            <ul className="p-4 w-full xs:w-1/2 lg:w-1/4">
              <span className="font-bold"> Company</span>
              <li className="my-2">
                <Link href={"/"}>About</Link>
              </li>
              <li className="my-2">
                <Link href={"/"}>Features</Link>
              </li>
              <li className="my-2">
                <Link href={"/"}>Works</Link>
              </li>
              <li className="my-2">
                <Link href={"/"}>Carrear</Link>
              </li>
            </ul>
            <ul className="p-4 w-full  xs:w-1/2 lg:w-1/4">
              <span className="font-bold"> Help</span>
              <li className="my-2">
                <Link href={"/"}>Customer Suport</Link>
              </li>
              <li className="my-2">
                <Link href={"/"}>Delivery Details</Link>
              </li>
              <li className="my-2">
                <Link href={"/"}>Terms & Conditions</Link>
              </li>
              <li className="my-2">
                <Link href={"/"}>Privacy Policy</Link>
              </li>
            </ul>
            <ul className="p-4 w-full  xs:w-1/2 lg:w-1/4">
              <span className="font-bold"> FAQ</span>
              <li className="my-2">
                <Link href={"/"}>Account</Link>
              </li>
              <li className="my-2">
                <Link href={"/"}>Manage Deliveres </Link>
              </li>
              <li className="my-2">
                <Link href={"/"}>Orders</Link>
              </li>
              <li className="my-2">
                <Link href={"/"}>Payments</Link>
              </li>
            </ul>
            <ul className="p-4 w-full  xs:w-1/2 lg:w-1/4">
              <span className="font-bold"> Resources</span>
              <li className="my-2">
                <Link href={"/"}>Free eBooks</Link>
              </li>
              <li className="my-2">
                <Link href={"/"}>Delelopment Tutorial </Link>
              </li>
              <li className="my-2">
                <Link href={"/"}>How To -Blog</Link>
              </li>
              <li className="my-2">
                <Link href={"/"}>Youtube Playlist</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between border-t-2 w-full border-white py-4">
          <span>Shop.co© 2000-2021, All rights reserved</span>
          <div className="flex flex-wrap ">
          <div className="bg-white my-2 md:my-0 mx-2 w-16 h-12 rounded-[6px] flex justify-center items-center">
            <Image src={image1} alt="image" className="w-10 "/>
          </div>
          <div className="bg-white mx-2  my-2 md:my-0 w-16 h-12 rounded-[6px] flex justify-center items-center">
            <Image src={image2} alt="image" className="w-10 "/>
          </div>
          <div className="bg-white mx-2  my-2 md:my-0 w-16 h-12 rounded-[6px] flex justify-center items-center">
            <Image src={image3} alt="image" className="w-10 "/>
          </div>
          <div className="bg-white mx-2  my-2 md:my-0 w-16 h-12 rounded-[6px] flex justify-center items-center">
            <Image src={image4} alt="image" className="w-10 "/>
          </div>
          <div className="bg-white mx-2  my-2 md:my-0 w-16 h-12 rounded-[6px] flex justify-center items-center">
            <Image src={image5} alt="image" className="w-10 "/>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
