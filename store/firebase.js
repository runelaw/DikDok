import { getApps, initializeApp } from 'firebase/app';
import { browserPopupRedirectResolver, initializeAuth } from 'firebase/auth';
import { initializeFirestore } from 'firebase/firestore';
import { useEffect } from 'react';
import create from 'zustand';

export const useFirebaseInitialized = create(() => ({
  isInitialized: false,
}));

export let firebase;
export let firestore;
export let firebaseAuth;

const firebaseConfig = {
  apiKey: 'AIzaSyB0t1O71SFgX58WdxIKDwXdEJMgh-SLbKM',
  authDomain: 'bhagya-cd492.firebaseapp.com',
  projectId: 'bhagya-cd492',
  storageBucket: 'bhagya-cd492.appspot.com',
  messagingSenderId: '962439063660',
  appId: '1:962439063660:web:738d3653349f0506759049',
};

/**
 * Initializes the firebase instance.
 */
export function useInitializeFirebase() {
  useEffect(() => {
    if (getApps().length !== 0) {
      // It's been initialized.
      return;
    }

    firebase = initializeApp(firebaseConfig);
    firestore = initializeFirestore(firebase, {});
    firebaseAuth = initializeAuth(firebase, {
      popupRedirectResolver: browserPopupRedirectResolver,
    });

    useFirebaseInitialized.setState({
      isInitialized: true,
    });
  });
}

/**
 * Get the current firebase user.
 */
export function getFirebaseUser() {
  return new Promise((resolve, reject) => {
    const unsubscribe = firebaseAuth.onAuthStateChanged(
      (user) => {
        resolve(user);
        unsubscribe();
      },
      (error) => {
        reject(error);
        unsubscribe();
      }
    );
  });
}
