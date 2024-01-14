import create from 'zustand';

interface leftNavState {
  showNav: boolean;
  setShowNav: (value: boolean) => void;
}

const useLeftNavStateStore = create<leftNavState>((set) => ({
  showNav: false,
  setShowNav: (value) => set({ showNav: value }),
}));

export default useLeftNavStateStore;