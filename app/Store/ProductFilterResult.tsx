import { create } from "zustand";

interface IProductFilter {
  productFilters: any;
  setProductFilter: (data: any) => void;
}
const useProductFilterResult = create<IProductFilter>((set) => ({
  productFilters: [],
  setProductFilter: (data) =>
    set(() => ({
      productFilters: data,
    })),
}));
export default useProductFilterResult;
