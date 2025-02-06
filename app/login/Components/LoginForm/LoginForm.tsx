import React from "react";
import { Input } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { CiLock } from "react-icons/ci";
import BasButton from "@/app/components/Local/button/Bas.Button";
import { LoginAction } from "@/app/Actions/LoginAction";
function LoginForm() {
  return (
    <form action={LoginAction}>
      <Input
        size="large"
        placeholder="Username"
        className="mb-4 mt-4"
        required
        name="userName"
        prefix={<UserOutlined />}
      />
      <Input
        size="large"
        type="Password"
        name="password"
        placeholder="Password"
        required
        prefix={<CiLock />}
      />

      <span className="hover:cursor-pointer text-xs my-4">
        Forget Password?
      </span>

      <BasButton type="submit" title="Login" hasBg />
    </form>
  );
}

export default LoginForm;
