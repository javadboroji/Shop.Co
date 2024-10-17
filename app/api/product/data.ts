import { category, ProductCard, ProductSize } from "@/app/types";
import image from "@/public/image/Frame 32.png";
import image2 from "@/public/image/glass1.jpg";
import image2i from "@/public/image/glass2.jpg";
import image2ii from "@/public/image/glass3.jpg";
import image3 from "@/public/image/w1.jpg";
import image3i from "@/public/image/w2.jpg";
import image4 from "@/public/image/cloth1.jpg";
import image4i from "@/public/image/cloth2.jpg";
import image4ii from "@/public/image/cloth3.jpg";
import tShirt from "@/public/image/t-shrt.jpg";
import TshirtMen from "@/public/image/T-shertMen.jpg"
export const product: ProductCard[] = [
  {
    image: image as any,
    price: 350,
    saleCount: 19,  
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
    image: image2 as any,
    price: 500,
    
    title: "Ray-Ban",
    rating: 4,
    discountPercentage: 0,
    description:
      "Sugar and spice. This contoured D-frame look from Ray-Ban has plenty of appeal, with unique metal rivet detail at the wingtips, a molded saddle bridge, integrated nose pads, and contoured arms for comfort.",
    discountPrice: 0,
    _id: "fe65b8ee-4c07-44df-abad-9839cba7f488",
    color: ["#063AF5", "#31344F", "#4F4631"],
    size: [
      { id: "size-3", name: "Small" },
      { id: "size-4", name: "Medium" },
      { id: "size-5", name: "Large" },
    ],
    comments: [],
    category: { id: "cat-4", name: "glass" },
    ColectionImage: [
      { alt: "image", id: "colection-1", src: image2 as any },
      { alt: "image", id: "colection-2", src: image2i as any },
      { alt: "image", id: "colection-3", src: image2ii as any },
    ],
  },
  {
    image: image3 as any,
    price: 500,
    saleCount: 19,  
    title: "Sandal",
    rating: 2,
    discountPercentage: 20,
    discountPrice: 100,
    _id: "d69c66a0-5cef-473b-b429-7caf585b9cea",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",

    color: ["#314F4A", "#31344F", "#4F4631"],
    size: [
      { id: "size-6", name: "41" },
      { id: "size-6", name: "39" },
    ],
    comments: [],
    category: { id: "cat-5", name: "shoes" },
    ColectionImage: [
      { alt: "image", id: "colection-1", src: image3 as any },
      { alt: "image", id: "colection-2", src: image3i as any },
      { alt: "image", id: "colection-3", src: image3 as any },
    ],
  },
  {
    image: image4 as any,
    price: 480,
    title: "Canva dress",
    rating: 3,
    _id: "7b531040-f26b-4f5d-969f-f9a8d3b45f04",
    description:
      "Our customizable Canva dress lets you design the perfect outfit. Choose from a variety of fabrics, styles, and patterns to create a one-of-a-kind piece.",

    color: ["#314F4A", "#31344F", "#4F4631", "#000000", "#FFFFFF"],
    size: [
      { id: "size-3", name: "Small" },
      { id: "size-5", name: "Large" },
      { id: "size-6", name: "X-Large" },
      { id: "size-7", name: "XX-Large" },
      { id: "size-8", name: "3X-Large" },
    ],
    comments: [],
    category: { id: "cat-1", name: "clothes" },
    ColectionImage: [
      { alt: "image", id: "colection-1", src: image4 as any },
      { alt: "image", id: "colection-2", src: image4i as any },
      { alt: "image", id: "colection-3", src: image4ii as any },
    ],
  },
  {
    image: image4i as any,
    saleCount: 18,
    price: 500,
    title: "Canva dress",
    rating: 5,
    _id: "756eb605-360a-4191-8ad6-0591cf1e5e67",
    description:
      "Our customizable Canva dress lets you design the perfect outfit. Choose from a variety of fabrics, styles, and patterns to create a one-of-a-kind piece.",

    color: ["#314F4A", "#31344F", "#4F4631"],
    size: [
      { id: "size-6", name: "X-Large" },
      { id: "size-7", name: "XX-Large" },
      { id: "size-8", name: "3X-Large" },
    ],
    comments: [],
    category: { id: "cat-1", name: "clothes" },
    ColectionImage: [
      { alt: "image", id: "colection-1", src: image4 as any },
      { alt: "image", id: "colection-2", src: image4i as any },
      { alt: "image", id: "colection-3", src: image4ii as any },
    ],
  },
  {
    image: image2i as any,
    saleCount: 20,
    price: 450,
    title: "Ray-Ban",
    rating: 5,
    discountPercentage: 0,
    description:
      "Sugar and spice. This contoured D-frame look from Ray-Ban has plenty of appeal, with unique metal rivet detail at the wingtips, a molded saddle bridge, integrated nose pads, and contoured arms for comfort.",
    discountPrice: 0,
    _id: "8cde4c0e-f7c2-4dee-9e5d-b46f0ed45b86",
    color: ["#063AF5", "#31344F", "#4F4631"],
    size: [
      { id: "size-3", name: "Small" },
      { id: "size-4", name: "Medium" },
      { id: "size-5", name: "Large" },
    ],
    comments: [],
    category: { id: "cat-4", name: "glass" },
    ColectionImage: [
      { alt: "image", id: "colection-1", src: image2 as any },
      { alt: "image", id: "colection-2", src: image2i as any },
      { alt: "image", id: "colection-3", src: image2ii as any },
    ],
  },
  {
    image: TshirtMen as any,
    price: 880,
    title: "Men's t-shirt",
    rating: 3,
    _id: "894c37ad-3598-4331-9e71-e9135b28c80f ",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    color: ["#314F4A", "#31344F", "#4F4631"],
    size: [
      { id: "size-5", name: "Large" },
      { id: "size-6", name: "X-Large" },
    ],
    comments: [],
    category: { id: "cat-2", name: "T-shirts"},
    ColectionImage: [
      { alt: "image", id: "colection-1", src: image as any },
      { alt: "image", id: "colection-2", src: image as any },
      { alt: "image", id: "colection-3", src: image as any },
    ],
  },
  {
    image: tShirt as any,
    price: 380,
    title: "T-shirt",
    rating: 1,
    _id: "aec37264-44e3-4168-b19a-71e79b1f3d1b",
    description:
      "This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.",
    color: ["#314F4A", "#31344F", "#4F4631"],
    size: [
      { id: "size-5", name: "Large" },
      { id: "size-6", name: "X-Large" },
    ],
    comments: [],
    category: { id: "cat-2", name: "T-shirts" },
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
