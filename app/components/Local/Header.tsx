"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import SiteLogo from "./SiteLogo";
import { FaUser } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { CiSearch } from "react-icons/ci";
import useAddToBasket from "@/app/Store/AddToBasket";
export type MenuType = {
  id: number;
  url: string;
  title: string;
};
const Header = () => {
  const menu: MenuType[] = [
    {
      id: 1,
      url: "/",
      title: "Home",
    },
    {
      id: 2,
      url: "/category",
      title: "Category",
    },
    {
      id: 3,
      url: "/login",
      title: "Login",
    },
  ];
  const [mobileMneuShow, setMobileMneuShow] = useState(false);
  const toggleMenu = () => {
    setMobileMneuShow((prev) => !prev);
  };
  return (
    <div
      className={`bg-white z-50 lg:h-auto ${
        mobileMneuShow ? "h-[100dvh]" : "h-auto"
      }  fixed top-0 left-0 right-0 ec-box-shadow p-4 lg:p-6`}
    >
      <div className="container flex justify-between lg:mx-auto items-center ">
        <RxHamburgerMenu
          size={24}
          className="lg:hidden flex"
          onClick={() => toggleMenu()}
        />
        <SiteLogo />
        <ul className=" hidden lg:flex mx-4">
          {menu.map((item: MenuType) => (
            <li className="mx-4" key={item.id + "menu"}>
              <Link className="text-lg" href={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex justify-end flex-1">
          <SearchMenu />
          <MenuAction />
        </div>
      </div>
      <ul
        className={`${
          mobileMneuShow ? "flex-col" : "hidden"
        }  lg:hidden mx-4 mt-3`}
      >
        {menu.map((item: MenuType) => (
          <li className="m-4 " key={item.id + "menu"}>
            <Link className="text-lg" href={item.url}>
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Header;

const SearchMenu = () => {
  return (
    <>
      <div className="  flex-1 hidden lg:block lg:mx-8 relative">
        <input className="w-full px-8 py-2 rounded-[1rem] border-2" />
        <CiSearch size={24} color="gray" className="absolute left-2 top-3" />
      </div>
      <CiSearch size={24} className="lg:hidden mx-2" />
    </>
  );
};
const MenuAction = () => {
  const { products } = useAddToBasket();
  useEffect(() => {
  }, [products]);

  return (
    <div className="flex items-center">
      <button>
        <FaUser size={24} className="mx-2" />
      </button>
      <button className="relative">
        <span className="absolute left-1 -top-1 bg-red-50 rounded-full w-4 h-4 flex justify-center items-center text-red-400">{products.length}</span>
        <Link href={"/cart"}><SlBasket size={24} className="mx-2" /></Link>
      </button>
    </div>
  );
};
