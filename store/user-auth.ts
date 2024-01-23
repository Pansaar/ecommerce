import create, { SetState } from 'zustand';

interface AuthStore {
  authenticated: boolean;
  authenticatedUser: string;
  setAuthenticated: (value: boolean) => void;
  setAuthenticatedUser: (user: string) => void;
}

const useAuthStore = create<AuthStore>((set: SetState<AuthStore>) => {
  const storedAuthenticated = typeof window !== 'undefined' ? localStorage.getItem('authenticated') : null;
  const storedAuthenticatedUser = typeof window !== 'undefined' ? localStorage.getItem('authenticatedUser') : null;

  return {
    authenticated: storedAuthenticated ? JSON.parse(storedAuthenticated) : false,
    authenticatedUser: storedAuthenticatedUser || '',
    setAuthenticated: (value: boolean) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('authenticated', JSON.stringify(value));
      }
      set({ authenticated: value });
    },
    setAuthenticatedUser: (user: string) => {
      if (typeof window !== 'undefined') {
        localStorage.setItem('authenticatedUser', user);
      }
      set({ authenticatedUser: user });
    },
  };
});

export default useAuthStore;
