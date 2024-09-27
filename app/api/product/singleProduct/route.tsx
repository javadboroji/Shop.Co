import { NextRequest, NextResponse } from "next/server";
import type { NextApiRequest, NextApiResponse } from "next";
import { product } from "../data";
export async function POST(req: NextRequest) {
  const { id } = await req.json();  
  try {
    const foundPost = await product.find((item) => item._id === id);
    console.log(foundPost,'**********');
    
    return NextResponse.json({
      code: 200,
      message: "",
      data: foundPost,
    });
  } catch (error) {
    return NextResponse.json({ code: 500, message: error });
  }
}
