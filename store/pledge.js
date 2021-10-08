import {
  addDoc,
  arrayRemove,
  arrayUnion,
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
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
 * Hook to promote a pledge.
 */
export function usePromotePledge() {
  return useCallback(async (pledgeId) => {
    const user = useAuth.getState().user;
    if (!user) {
      return;
    }

    // Add the user id to the pledge as their promoters.
    await updateDoc(doc(firestore, 'pledges', pledgeId), {
      promoters: arrayUnion(user.uid),
    });
  }, []);
}

/**
 * Hook to unpromote a pledge.
 */
export function useUnpromotePledge() {
  return useCallback(async (pledgeId) => {
    const user = useAuth.getState().user;
    if (!user) {
      return;
    }

    // Remove the user id from the pledge.
    await updateDoc(doc(firestore, 'pledges', pledgeId), {
      promoters: arrayRemove(user.uid),
    });
  }, []);
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
