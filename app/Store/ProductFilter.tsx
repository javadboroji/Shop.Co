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
}));

export default useProductFilter;
