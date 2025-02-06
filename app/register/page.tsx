import EccomerceLayout from "../EccomerceLayout";
import MainComponentWrap from "../components/Local/MainComponentWrap";
import "./style.css";
import SiteLogo from "../components/Local/SiteLogo";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { CiLock } from "react-icons/ci";
import BasButton from "../components/Local/button/Bas.Button";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import Link from "next/link";
import { MdEmail } from "react-icons/md";

function page() {
  return (
    <div className="flex mt-16 flex-col w-[35%] mx-auto rounded-3xl p-8  form-box">
      <Link href={"/"}>
        {" "}
        <SiteLogo />
      </Link>
      <Input
        size="large"
        placeholder="Username"
        className="mb-4 mt-4"
        prefix={<UserOutlined />}
      />
        <Input
        size="large"
        placeholder="Email"
        className="mb-4 mt-4"
        prefix={<MdEmail />}
      />
      <Input
        size="large"
        type="Password"
        placeholder="Password"
        prefix={<CiLock />}
      />
      <BasButton title="Register" hasBg />
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
      <div className="flex my-4">
        <Link className="text-sm text-blue-600" href="/login">
          {" "}
          Login
        </Link>
      </div>
    </div>
  );
}

export default page;
