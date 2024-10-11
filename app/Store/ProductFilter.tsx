import { create } from "zustand";
import { category, ProductSize } from "../types";

interface IProductFilter {
  filters: {
    category: category | null;
    price: [number, number] | [];
    color: string;
    size: ProductSize | null;
  };
  setFilterCat: (catFilters: category) => void;
  setFilterPrice: (price: [number, number]) => void;
  setFilterColor:(color:string)=>void;
  setFilterSize:(size:ProductSize)=>void
}
const useProductFilter = create<IProductFilter>((set) => ({
  filters: {
    category: null,
    price: [],
    color: "",
    size: null,
  },
  setFilterCat: (catFilters: category) => {
    set((state) => ({
      filters: { ...state.filters, category: catFilters },
    }));
  },
  setFilterPrice: (price: [number, number]) => {
    set((state) => ({
      filters: { ...state.filters, price: price },
    }));
  },
  setFilterColor: (color: string) => {
    set((state) => ({
      filters: { ...state.filters, color: color },
    }));
  },
  setFilterSize: (size: ProductSize) => {
    set((state) => ({
      filters: { ...state.filters, size:size },
    }));
  },
}));

export default useProductFilter;
