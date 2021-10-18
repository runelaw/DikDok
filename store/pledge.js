import { useCallback } from 'react';
import {
  collection,
  doc,
  serverTimestamp,
  setDoc,
  getDoc,
  query,
  where,
  increment,
} from 'firebase/firestore';
import { firestore } from 'store/firebase';

/**
 * Hook to make a pledge.
 */
export function useMakeAPledge() {
  return useCallback(async ({ name, email }) => {
    const pledge = await getDoc(
      query(collection(firestore, 'pledges'), where('email', '==', email))
    );
    if (pledge.exists()) {
      return;
    }

    await setDoc(
      doc(collection(firestore, 'pledges')),
      {
        name,
        email,
        createdAt: serverTimestamp(),
      },
      {
        mergeFields: ['name', 'email'],
      }
    );

    // Increment the counter.
    await setDoc(
      doc(firestore, 'pledgesCount', 'count'),
      {
        count: increment(0),
      },
      { merge: true }
    );
  }, []);
}
