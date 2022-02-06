import { useCallback } from 'react';
import {
  collection,
  doc,
  getDoc,
  increment,
  serverTimestamp,
  setDoc,
} from 'firebase/firestore';
import { firebaseAuth, firestore } from 'store/firebase';
import { useQuery, useQueryClient } from 'react-query';

/**
 * Gets the pledges count.
 */
export function usePledgesCount() {
  return useQuery('get-pledges-count', () =>
    getDoc(doc(firestore, 'pledgesCount', 'count')).then(
      (result) => result.get('count') ?? 0
    )
  );
}

/**
 * Hook to make a pledge.
 */
export function useMakePledge() {
  const queryClient = useQueryClient();

  return useCallback(
    async ({ name }) => {
      const uid = firebaseAuth.currentUser?.uid;
      if (!uid) {
        throw new Error('anonymous user is yet to login');
      }

      await setDoc(
        doc(collection(firestore, 'pledges')),
        {
          name,
          createdAt: serverTimestamp(),
          // We are storing the anonymous user's uid just in case someone spams the form. And
          // we can remove spammed entries by looking at the UID. Though this should normally
          // not be a problem as the app is not popular enough.
          createdBy: uid,
        },
        {
          mergeFields: ['name'],
        }
      );

      // Increment the counter.
      await setDoc(
        doc(firestore, 'pledgesCount', 'count'),
        {
          count: increment(1),
        },
        { merge: true }
      );

      await queryClient.invalidateQueries('get-pledges-count');
    },
    [queryClient]
  );
}
