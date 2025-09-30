
import { create } from "zustand";

const useStore = create((set) => ({
  pageData: [],
  setPageData: (data) =>
    set({ pageData: [...(Array.isArray(data) ? data : [data])] }),
  clearPageData: () => set({ pageData: null }),
}));

export default useStore;
