"use server";
import { useRouter } from "next/router";
import { fetchData, FetchDataArg } from "@/lib/fetchData";
import { redirect } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
export async function LoginAction(formData: FormData) {
  const userName = formData.get("userName");
  const password = formData.get("password");  
  try {
    if (userName && password) {
      const params: FetchDataArg = {
        url: `${process.env.BASE_URL}/api/user/login`,
        method: "post",
        cache: "no-store",
        body: {
          userName: userName,
          password: password,
        },
      };
    
      
      const response = await fetchData(params);
      console.log(response,'action');
      
      if (response) {
        return response.data;
      } else {
        return response;
      }
    }
  } catch (error) {
    return error;
  }
}
