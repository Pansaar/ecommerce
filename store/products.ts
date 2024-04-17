import create from 'zustand';

interface ProductIdStore {
    productId: string;
    setProductId: (value: string) => void;
    product: Array<{ id: string; name: string; price: number; amount: number; image: string }>;
    setProduct: (value: Array<{ id: string; name: string; price: number; amount: number; image: string }>) => void;
}

const useProductIdStore = create<ProductIdStore>((set) => ({
    productId: '',
    setProductId: (value) => set({ productId: value }),
    product: [],
    setProduct: (value) => set({ product: value }),
}));

export default useProductIdStore;
