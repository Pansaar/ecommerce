import create from 'zustand';

interface ProductIdStore {
    productId: string;
    setProductId: (value: string) => void;
}

const useProductIdStore = create<ProductIdStore>((set) => ({
    productId: '',
    setProductId: (value) => set({ productId: value }),
}));

export default useProductIdStore;
