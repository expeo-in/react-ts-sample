import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface CounterStore {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

// const useCounterStore = create<CounterStore>((set) => ({
//   count: 0,
//   increment: () => {
//     set((store: any) => ({ count: store.count + 1 }));
//   },
//   decrement: () => {
//     set((store: any) => ({ count: store.count - 1 }));
//   },
//   reset: () => {
//     set((store: any) => ({ count: 0 }));
//   },
// }));

const useCounterStore = create<any>(
  persist(
    (set, get) => ({
      count: 0,
      increment: () => set({ count: get().count + 1 }),
      decrement: () => set({ count: get().count - 1 }),
      reset: () => set({ count: 0 }),
    }),
    {
      name: "counter-store",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCounterStore;
