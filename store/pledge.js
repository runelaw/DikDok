import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
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
export function useMyPledges() {
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
 * Get the top pledges.
 */
export function useTopPledges() {
  return useQuery(
    'get-pledges',
    useCallback(
      () =>
        getDocs(
          query(
            collection(firestore, 'pledges'),
            orderBy('createdAt', 'desc'),
            limit(4)
          )
        ).then((result) =>
          result.docs.map((it) => ({ id: it.id, ...it.data() }))
        ),
      []
    )
  );
}

/**
 * Get the pledge by its id.
 */
export function usePledgeById(pledgeId) {
  return useQuery(
    `get-pledge-${pledgeId}`,
    useCallback(
      () =>
        getDoc(doc(firestore, 'pledges', pledgeId)).then((result) => ({
          id: result.id,
          ...result.data(),
        })),
      [pledgeId]
    )
  );
}

/**
 * Get all the pledges.
 */
export function useAllPledges() {
  return useQuery(
    'get-all-pledges',
    useCallback(
      () =>
        getDocs(
          query(collection(firestore, 'pledges'), orderBy('createdAt', 'desc'))
        ).then((result) =>
          result.docs.map((it) => ({
            id: it.id,
            ...it.data(),
          }))
        ),
      []
    )
  );
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
