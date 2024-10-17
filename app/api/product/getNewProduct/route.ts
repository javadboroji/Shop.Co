import { NextRequest, NextResponse } from "next/server";
import type { ProductCard } from "@/app/types";
import { product } from "../data";

export async function GET() {
  try {
    const newProduct=product.slice(4)
    return NextResponse.json(
      {
        message: "",
        data: newProduct,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
