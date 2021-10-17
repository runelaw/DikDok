import { useCallback } from 'react';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';
import { firestore } from 'store/firebase';

/**
 * Hook to make a pledge.
 */
export function useMakeAPledge() {
  return useCallback(async ({ name, email }) => {
    await setDoc(
      doc(firestore, 'pledges', email),
      {
        name,
        email,
        createdAt: serverTimestamp(),
      },
      {
        mergeFields: ['name', 'email'],
      }
    );
  }, []);
}
