import create from 'zustand';

interface RegErrorState {
  isVisible: boolean;
  setShowError: (value: boolean) => void;
  message: string;
  setMessage: (message: string) => void;
}

const useRegErrorStore = create<RegErrorState>((set) => ({
  isVisible: false,
  setShowError: (value) => set({ isVisible: value }),
  message: "",
  setMessage: (message) => set({ message: message })
}));

export default useRegErrorStore;