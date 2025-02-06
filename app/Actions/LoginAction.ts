"use server";
import { useRouter } from 'next/router';
import { fetchData, FetchDataArg } from "@/lib/fetchData";
import { redirect } from 'next/navigation';

export async function LoginAction(formData: FormData) {
  const userName = formData.get("userName");
  const password = formData.get("password");
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
    if(!response.ok)throw new Error(`HTTP error! status: ${response.status}`);
    if(response){
      redirect(`${process.env.BASE_URL}/dashboard`)
    }
  }
}
