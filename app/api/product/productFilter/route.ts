import { NextRequest, NextResponse } from "next/server";
import { product } from "../data";
import { category, ProductSize } from "@/app/types";
interface IFilter {
  category: category;
  price: [number, number];
  color: string;
  size: ProductSize;
}
export async function POST(req: NextRequest) {
  const { category, price, color, size }: IFilter = await req.json();
  const productsFilter = await fetchProduct(category, price, color, size);
  try {
    return NextResponse.json({
      code: 200,
      message: "",
      data: productsFilter,
    });
  } catch (error) {
    return NextResponse.json({ code: 500, message: error });
  }
  async function fetchProduct(
    category?: category,
    price?: [number, number],
    color?: string,
    size?: ProductSize
  ) {
    let resultProduct = product;

    if (category) {
      resultProduct = resultProduct.filter(
        (product) => product.category?.name === category.name
      );
    }
    if (price?.[0] && price?.[1]) {
      resultProduct = resultProduct.filter(
        (product) => product.price > price[0] && product.price < price[1]
      );
    }
    if (color) {
      resultProduct = resultProduct.filter((product) =>
        product.color.some((item) => item == color)
      );
    }
    if (size?.id && size.name) {
      resultProduct = resultProduct.filter((product) =>
        product.size.some((item) => item.id === size.id)
      );
    }
    return resultProduct;
  }
}
