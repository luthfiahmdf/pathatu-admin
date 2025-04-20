import { TShowSidebar } from "@/types/sidebar/type";
import { create } from "zustand";
export const useShowSidebar = create<TShowSidebar>((set) => ({
  showSideBar: false,
  setShowSidebar: () => set((state) => ({ showSideBar: !state.showSideBar })),
}));
