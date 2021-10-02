import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import create from 'zustand';
import { firebaseAuth, useFirebaseInitialized } from './firebase';

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

/**
 * Initializes the logged in user when the app loads and keeps the login state in
 * sync.
 */
export function useInitializeAuthStore() {
  const setLoggedIn = useAuth(useCallback((state) => state.setLoggedIn, []));
  const isInitialized = useFirebaseInitialized(
    useCallback((state) => state.isInitialized, [])
  );

  useEffect(() => {
    if (!isInitialized) {
      return;
    }

    // Starts tracking the login state of the app for the whole life of the app.
    const unsubscribe = onAuthStateChanged(firebaseAuth, (user) => {
      if (!user) {
        setLoggedIn(loggedIn.false, null);
        return;
      }

      setLoggedIn(loggedIn.true, {
        uid: user.uid,
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
      });
    });

    return unsubscribe;
  }, [isInitialized, setLoggedIn]);
}

/**
 * Sign in the app with google.
 */
export function useLogin() {
  const { push } = useRouter();

  return useCallback(async () => {
    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    provider.setCustomParameters({
      prompt: 'select_account',
    });

    try {
      await signInWithPopup(firebaseAuth, provider);
    } catch (error) {
      console.log('Log in failed.');
    }
  }, []);
}

/**
 * Hook to logout from the app.
 */
export async function logout() {
  await signOut(firebaseAuth);
}
