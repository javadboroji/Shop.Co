import { create } from "zustand";
import { ProductBasket, ProductCard } from "../types";
type bascketProductType = ProductCard & {
  count: number;
};
interface IBascketProduct {
  products: ProductBasket[];
  setProductBasket: (product: ProductBasket) => void;
  incrementProductCount: (id: string, count: number) => void;
  updateStore: (id: string, count: number) => void;
  removeProduct: (id: string) => void;
}
const useAddToBasket = create<IBascketProduct>((set) => ({
  products: [],
  setProductBasket: (product) =>
    set((state) => ({
      products: [...state.products, product],
    })),
  incrementProductCount: (id, count) =>
    set((state) => ({
      products: state.products.map((item: ProductBasket) =>
        item._id === id ? { ...item, count: count } : item
      ),
    })),
  removeProduct: (id) =>
    set((state) => ({
      products: state.products.filter(
        (product: ProductBasket) => product._id !== id
      ),
    })),
  updateStore: (id, count) =>
    set((state) => ({
      products: state.products.map((item: ProductBasket) =>
        item._id === id ? { ...item, count: count } : item
      ),
    })),
}));

export default useAddToBasket;
