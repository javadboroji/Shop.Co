import { NextRequest, NextResponse } from "next/server";
import type { ProductCard } from "@/app/types";
import { Category, Colors, Sizes } from "../data";

export async function GET() {
  try {
    //await connectMongoDB();
    //const productsData=await Products.find();
    //console.log(productsData,'*productsData*');

    return NextResponse.json(
      {
        message: "",
        data: Sizes,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
