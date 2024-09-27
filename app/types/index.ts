export type ProductCard = ProductInfo & {
  image: string;
  title: string;
  rating: number;
  price: number;
  discountPercentage?: number;
  description?: string;
  discountPrice?: number;
  _id?: string;
  comments?: Comments[];
  category?: category;
  ColectionImage?: ColectionImage[];
};
export type ProductBasket={
  image: string;
  title: string;
  price: number;
  _id?: string;
  size:string,
  color:string,
  count:number
}
export type ProductColor = {
  id: string;
  value: string;
  name: string;
};
export type ProductSize = {
  id: string;
  name: string;
};
export type ProductInfo = {
  color: string[];
  size: ProductSize[];
};
export type Comments = {
  id: number;
  userName: string;
  commentText: string;
  rating: number;
};
export type category = {
  name: string;
  id: string;
};
export type ColectionImage = {
  src: string;
  alt: string;
  id: string;
};
