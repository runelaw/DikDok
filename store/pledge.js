import {
  addDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
} from 'firebase/firestore';
import { useCallback, useEffect } from 'react';
import { useQuery } from 'react-query';
import { useAuth } from './auth';
import { firestore } from './firebase';

/**
 * Hook to create a pledge.
 */
export function useCreatePledge() {
  return useCallback(async (state) => {
    const user = useAuth.getState().user;
    if (!user) {
      return;
    }

    await addDoc(collection(firestore, 'pledges'), {
      ...state,
      uid: user.uid,
      // The pledge will need to be approved by the admin.
      isApproved: false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }, []);
}

/**
 * Lists all the pledges created by the user.
 */
export function usePledges() {
  const uid = useAuth(useCallback((state) => state.user?.uid, []));

  const { refetch, ...rest } = useQuery(
    'get-user-pledges',
    useCallback(
      () =>
        uid
          ? getDocs(
              query(collection(firestore, 'pledges'), where('uid', '==', uid))
            ).then((result) =>
              result.docs.map((it) => ({ id: it.id, ...it.data() }))
            )
          : null,
      [uid]
    )
  );

  // Refetch if uid changes.
  useEffect(() => {
    if (uid) {
      refetch();
    }
  }, [refetch, uid]);

  return { ...rest, refetch };
}

/**
 * All the tags that are used in pledges.
 */
export const pledgeTags = {
  education: 'Education',
  agriculture: 'Agriculture',
  finance: 'Finance',
  manufacturing: 'Manufacturing',
};
