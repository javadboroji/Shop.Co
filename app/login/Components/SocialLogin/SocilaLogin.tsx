import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";


function SocilaLogin() {
  return (
    <div className="flex flex-col items-center justify-between mx-auto">
      <span className="my-2 text-sm"> our countinue with </span>
      <div className="flex justify-between ">
        <div className="bg-black w-20 h-10 hover:cursor-pointer rounded-lg flex justify-center items-center mx-2">
          <FaGoogle className="text-white" />
        </div>
        <div className="bg-black w-20 h-10 hover:cursor-pointer rounded-lg flex justify-center items-center mx-2">
          <FaGithub className="text-white" />
        </div>
        <div className="bg-black w-20 h-10 hover:cursor-pointer rounded-lg flex justify-center items-center mx-2">
          <FaFacebookF className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default SocilaLogin;
