import { getApps, initializeApp } from 'firebase/app';
import {
  browserPopupRedirectResolver,
  indexedDBLocalPersistence,
  initializeAuth,
  signInAnonymously,
} from 'firebase/auth';
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
  apiKey: 'AIzaSyBF1ht1ZYlTx5rdPt8pgfSAACi-JaHG4ic',
  authDomain: 'bhagya100india.firebaseapp.com',
  projectId: 'bhagya100india',
  storageBucket: 'bhagya100india.appspot.com',
  messagingSenderId: '698433329811',
  appId: '1:698433329811:web:df735f73e0385b340e4b66',
  measurementId: 'G-72Z5KTDW5Y',
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

    (async () => {
      firebase = initializeApp(firebaseConfig);
      firestore = initializeFirestore(firebase, {});

      // Sign in anonymously so that we can use it to authorize access to firestore.
      firebaseAuth = initializeAuth(firebase, {
        persistence: indexedDBLocalPersistence,
        popupRedirectResolver: browserPopupRedirectResolver,
      });
      await signInAnonymously(firebaseAuth);

      useFirebaseInitialized.setState({
        isInitialized: true,
      });
    })();
  });
}
