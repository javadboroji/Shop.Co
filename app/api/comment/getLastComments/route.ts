import { NextRequest, NextResponse } from "next/server";
import type { ProductCard } from "@/app/types";

const lastComments = [
  {
    id: 1,
    userName: "Alex K",
    commentText:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasion",
    rating: 4,
  },
  {
    id: 2,
    userName: "Sarah M.",
    commentText:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasion",
    rating: 5,
  },
  {
    id: 3,
    userName: "James L.",
    commentText:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasion",
    rating: 1,
  },
  {
    id: 4,
    userName: "Mooen.",
    commentText:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasion",
    rating: 4,
  },
  {
    id: 5,
    userName: "James.",
    commentText:
      "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasion",
    rating: 5,
  },
];
export async function GET() {
  try {
    return NextResponse.json(
      {
        message: "",
        data: lastComments,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
}
