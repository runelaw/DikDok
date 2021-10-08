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
 * Hook to create an idea.
 */
export function useCreateIdea() {
  return useCallback(async (state) => {
    const user = useAuth.getState().user;
    if (!user) {
      return;
    }

    await addDoc(collection(firestore, 'ideas'), {
      ...state,
      uid: user.uid,
      // The idea will need to be approved by the admin.
      isApproved: false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }, []);
}

/**
 * Lists all the ideas created by the user.
 */
export function useMyIdeas() {
  const uid = useAuth(useCallback((state) => state.user?.uid, []));

  const { refetch, ...rest } = useQuery(
    'get-user-ideas',
    useCallback(
      () =>
        uid
          ? getDocs(
              query(collection(firestore, 'ideas'), where('uid', '==', uid))
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
 * Get the top ideas.
 */
export function useTopIdeas() {
  return useQuery(
    'get-ideas',
    useCallback(
      () =>
        getDocs(
          query(
            collection(firestore, 'ideas'),
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
 * Get the idea by its id.
 */
export function useIdeaById(ideaId) {
  return useQuery(
    `get-idea-${ideaId}`,
    useCallback(
      () =>
        getDoc(doc(firestore, 'ideas', ideaId)).then((result) => ({
          id: result.id,
          ...result.data(),
        })),
      [ideaId]
    )
  );
}

/**
 * Get all the ideas.
 */
export function useAllIdeas() {
  return useQuery(
    'get-all-ideas',
    useCallback(
      () =>
        getDocs(
          query(collection(firestore, 'ideas'), orderBy('createdAt', 'desc'))
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
 * Hook to promote an idea.
 */
export function usePromoteIdea() {
  return useCallback(async (ideaId) => {
    const user = useAuth.getState().user;
    if (!user) {
      return;
    }

    // Add the user id to the idea as their promoters.
    await updateDoc(doc(firestore, 'ideas', ideaId), {
      promoters: arrayUnion(user.uid),
    });
  }, []);
}

/**
 * Hook to unpromote an idea.
 */
export function useUnpromoteIdea() {
  return useCallback(async (ideaId) => {
    const user = useAuth.getState().user;
    if (!user) {
      return;
    }

    // Remove the user id from the idea.
    await updateDoc(doc(firestore, 'ideas', ideaId), {
      promoters: arrayRemove(user.uid),
    });
  }, []);
}

/**
 * All the tags that are used in ideas.
 */
export const ideaTags = {
  education: 'Education',
  agriculture: 'Agriculture',
  finance: 'Finance',
  manufacturing: 'Manufacturing',
};
