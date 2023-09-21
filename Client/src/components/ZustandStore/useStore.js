import { create } from 'zustand';

const localStorageKey = 'zustandCount';

const getInitialCount = () => {
  const storedCount = localStorage.getItem(localStorageKey);
  return storedCount ? parseInt(storedCount, 10) : 0;
};

const useStore = create((set) => ({
  count: getInitialCount(),
  increment: () => {
    set((state) => {
      const newCount = state.count + 1;
      localStorage.setItem(localStorageKey, newCount.toString());
      return { count: newCount };
    });
  },
  decrement: () => {
    set((state) => {
      const newCount = state.count - 1;
      localStorage.setItem(localStorageKey, newCount.toString());
      return { count: newCount };
    });
  },
}));

export default useStore;
