import { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { userName, password } = await req.json();
  console.log( userName, password ,"route");
  
  try {
    if (!userName || !password)
      return NextResponse.json({
        code: 400,
        message: "exepction ",
        data: {},
      });
    if (userName === "admin" && password === "admin") {
      return NextResponse.json({
        code: 200,
        message: "",
        data: { user: userName, password: password },
      });
    }
  } catch (error) {
    return NextResponse.json({ code: 500, message:"500"});
  }
}
