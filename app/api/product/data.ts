import { ProductCard } from "@/app/types";
import image from "@/public/image/Frame 32.png";

export const product: ProductCard[] = [
  {
    image: image as any,
    price: 350,
    title: "SKINNY FIT JEANS",
    rating: 5,
    _id: "aec37264-44e3-4168-b19a-71e79b1f3d1b",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
      color: ["#314F4A", "#31344F", "#4F4631"],
      size: [
      {
        id: "1234",
        name: "small",
      },
      {
        id: "12345",
        name: "Medium",
      },
      {
        id: "123456",
        name: "Large",
      },
      {
        id: "12345678",
        name: "X-Large",
      },
      {
        id: "12345679",
        name: "XX-Large",
      },
    ],
    comments: [],
    category: { id: "cat", name: "clothes" },
    ColectionImage: [
      { alt: "image", id: "colection-1", src: image as any },
      { alt: "image", id: "colection-2", src: image as any },
      { alt: "image", id: "colection-3", src: image as any },
    ],
  },
  {
    image: image as any,
    price: 200,
    title: "CHECKERED SHIRT",
    rating: 3,
    discountPercentage: 5,
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    discountPrice: 10,
    _id: "fe65b8ee-4c07-44df-abad-9839cba7f488",
    color: ["#314F4A", "#31344F", "#4F4631"],
    size: [
      {
        id: "1234",
        name: "small",
      },
      {
        id: "12345",
        name: "Medium",
      },
      {
        id: "123456",
        name: "Large",
      },
      {
        id: "12345678",
        name: "X-Large",
      },
    ],
    comments: [],
    category: { id: "cat", name: "clothes" },
    ColectionImage: [
      { alt: "image", id: "colection-1", src: image as any },
      { alt: "image", id: "colection-2", src: image as any },
      { alt: "image", id: "colection-3", src: image as any },
    ],
  },
  {
    image: image as any,
    price: 500,
    title: "SLEEVE STRIPED T-SHIRT",
    rating: 1,
    discountPercentage: 20,
    discountPrice: 100,
    _id: "d69c66a0-5cef-473b-b429-7caf585b9cea",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",

      color: ["#314F4A", "#31344F", "#4F4631"],
      size: [
      {
        id: "1234",
        name: "small",
      },
      {
        id: "12345",
        name: "Medium",
      },
      {
        id: "123456",
        name: "Large",
      },
      {
        id: "12345678",
        name: "X-Large",
      },
    ],
    comments: [],
    category: { id: "cat", name: "clothes" },
    ColectionImage: [
      { alt: "image", id: "colection-1", src: image as any },
      { alt: "image", id: "colection-2", src: image as any },
      { alt: "image", id: "colection-3", src: image as any },
    ],
  },
  {
    image: image as any,
    price: 180,
    title: "CHECKERED SHIRT",
    rating: 4,
    _id: "7b531040-f26b-4f5d-969f-f9a8d3b45f04",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",

    color: ["#314F4A", "#31344F", "#4F4631"],
    size: [
      {
        id: "1234",
        name: "small",
      },
      {
        id: "12345",
        name: "Medium",
      },
      {
        id: "123456",
        name: "Large",
      },
      {
        id: "12345678",
        name: "X-Large",
      },
    ],
    comments: [],
    category: { id: "cat", name: "clothes" },
    ColectionImage: [
      { alt: "image", id: "colection-1", src: image as any },
      { alt: "image", id: "colection-2", src: image as any },
      { alt: "image", id: "colection-3", src: image as any },
    ],
  },
];
