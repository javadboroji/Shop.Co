import { create } from "zustand";
interface ISizeAndColor {
  sizeSelect: string;
  colorSelect: string;
  setSize: (size: string) => void;
  setColor: (color: string) => void;
}
const useSizeAndColor = create<ISizeAndColor>((set) => ({
  sizeSelect: "",
  colorSelect: "",
  setSize: (size) =>
    set((state) => ({
      ...state,
      sizeSelect: size,
    })),
  setColor: (color) => set((state) => ({ ...state, colorSelect: color })),
}));

export default useSizeAndColor;
