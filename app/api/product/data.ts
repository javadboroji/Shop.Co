import { category, ProductCard, ProductSize } from "@/app/types";
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
      { id: "size-5", name: "Large" },
      { id: "size-6", name: "X-Large" },
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
      { id: "size-3", name: "Small" },
      { id: "size-4", name: "Medium" },
      { id: "size-5", name: "Large" },
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
    size: [{ id: "size-6", name: "X-Large" }],
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

    color: ["#314F4A", "#31344F", "#4F4631", "#000000","#FFFFFF"],
    size: [
      { id: "size-3", name: "Small" },
      { id: "size-5", name: "Large" },
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
export const Category: category[] = [
  { id: "cat-1", name: "clothes" },
  { id: "cat-2", name: "T-shirts" },
  { id: "cat-3", name: "Jeans" },
  { id: "cat-4", name: "glass" },
  { id: "cat-5", name: "shoes" },
];
export const Colors: string[] = [
  "#00C12B",
  "#F50606",
  "#F5DD06",
  "#F57906",
  "#06CAF5",
  "#063AF5",
  "#7D06F5",
  "#F506A4",
  "#FFFFFF",
  "#000000",
];
export const Sizes: ProductSize[] = [
  { id: "size-1", name: "XX-Small" },
  { id: "size-2", name: "X-Small" },
  { id: "size-3", name: "Small" },
  { id: "size-4", name: "Medium" },
  { id: "size-5", name: "Large" },
  { id: "size-6", name: "X-Large" },
  { id: "size-7", name: "XX-Large" },
  { id: "size-8", name: "3X-Large" },
];
