import { useCallback } from 'react';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  query,
  serverTimestamp,
  setDoc,
  where,
} from 'firebase/firestore';
import { firestore } from 'store/firebase';
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
export function useMakeAPledge() {
  const queryClient = useQueryClient();

  return useCallback(
    async ({ name, email }) => {
      const pledge = await getDocs(
        query(collection(firestore, 'pledges'), where('email', '==', email))
      );
      if (!pledge.empty) {
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
          count: increment(1),
        },
        { merge: true }
      );

      queryClient.invalidateQueries('get-pledges-count');
    },
    [queryClient]
  );
}
