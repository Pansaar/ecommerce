import create from 'zustand';

interface AuthStoreState {
  authenticatedUser: string;
  authenticated: boolean;
  setAuthenticated: (value: boolean) => void;
  setAuthenticatedUser: (value: string) => void;
}

const useAuthStore = create<AuthStoreState>((set) => ({
  authenticatedUser: '',
  authenticated: false,
  setAuthenticated: (value) => set({ authenticated: value }),
  setAuthenticatedUser: (value) => set({ authenticatedUser: value }),
}));

export default useAuthStore;
