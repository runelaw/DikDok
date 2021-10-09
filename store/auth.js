import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useCallback, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import create from 'zustand';
import { firebaseAuth, firestore, useFirebaseInitialized } from './firebase';

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
export function useLogout() {
  const client = useQueryClient();
  return useCallback(async () => {
    await signOut(firebaseAuth);
    // Remove all the data out.
    client.invalidateQueries();
  }, [client]);
}

/**
 * Initializes the logged in user info in firestore.
 */
export function useInitializeUser() {
  return useCallback(async () => {
    const user = useAuth.getState().user;
    if (!user) {
      return;
    }

    const storedUser = await getDoc(doc(firestore, 'users', user.uid));
    if (storedUser.exists()) {
      // The user is already initialized.
      return;
    }

    await setDoc(doc(firestore, 'users', user.uid), {
      name: user.name || null,
      photoURL: user.photoURL,
    });
  }, []);
}

/**
 * Gets the user by its ID to show information on initiatives and ideas.
 */
export function useUserById(userId) {
  return useQuery(
    `get-user-by-id-${userId}`,
    useCallback(
      () =>
        getDoc(doc(firestore, 'users', userId)).then((result) => ({
          id: result.id,
          ...result.data(),
        })),
      [userId]
    )
  );
}

/**
 * Update the name of the user.
 */
export function useUpdateUser() {
  return useCallback(async (name, transaction) => {
    const user = useAuth.getState().user;
    if (!user) {
      return;
    }

    if (user.name === name) {
      // No changes to be done.
      return;
    }

    transaction.set(doc(firestore, 'users', user.uid), {
      name,
      photoURL: user.photoURL,
    });

    // Also update it with the auth so that the latest is available everywhere.
    await updateProfile(firebaseAuth.currentUser, { displayName: name });
  }, []);
}
