import React from "react";
import "./style.css";
import SiteLogo from "../components/Local/SiteLogo";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { CiLock } from "react-icons/ci";
import BasButton from "../components/Local/button/Bas.Button";

import Link from "next/link";
import SocilaLogin from "./Components/SocialLogin/SocilaLogin";
import LoginForm from "./Components/LoginForm/LoginForm";

function page() {
  return (
    <div className="flex mt-16 flex-col w-[35%] mx-auto rounded-3xl p-8  form-box">
      <Link href={"/"}>
        {" "}
        <SiteLogo />
      </Link>
      <LoginForm />
      <SocilaLogin />
      <div className="flex my-4">
        <span className="text-sm">Dont have an account yet? </span>
        <Link className="text-sm text-blue-600" href="/register">
          {" "}
          Register
        </Link>
      </div>
    </div>
  );
}

export default page;
