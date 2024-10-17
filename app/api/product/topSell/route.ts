import { NextRequest, NextResponse } from "next/server";
import type { ProductCard } from "@/app/types";
import image from "@/public/image/Frame 32.png";
import { product } from "../data";

export async function GET() {
  try {
    const topSell=product.filter(item=>(item?.saleCount??0)>10&&item )
    console.log(topSell);
    
    return NextResponse.json(
      {
        message: "",
        data: topSell,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
