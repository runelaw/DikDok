import create from 'zustand';

export const loggedIn = {
  loading: 'loading',
  true: 'true',
  false: 'false',
};

export const useAuth = create((set) => ({
  isLoggedIn: loggedIn.loading,
  user: null,
  setLoggedIn(isLoggedIn, user) {
    set({ isLoggedIn, user });
  },
}));
