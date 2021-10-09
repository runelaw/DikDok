import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  limit,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  where,
} from 'firebase/firestore';
import { useCallback, useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import { useAuth, useInitializeUser, useUpdateUser } from './auth';
import { firestore } from './firebase';

/**
 * Hook to create an idea.
 */
export function useCreateIdea() {
  const initializeUser = useInitializeUser();

  return useCallback(
    async (state) => {
      const user = useAuth.getState().user;
      if (!user) {
        return;
      }

      await initializeUser();
      await addDoc(collection(firestore, 'ideas'), {
        ...state,
        uid: user.uid,
        // The idea will need to be approved by the admin.
        isApproved: false,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });
    },
    [initializeUser]
  );
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
    'get-top-ideas',
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
  const client = useQueryClient();
  const updateUser = useUpdateUser();

  return useCallback(
    async ({ ideaId, name }) => {
      const user = useAuth.getState().user;
      if (!user) {
        return;
      }

      const promoted = await getDoc(
        doc(firestore, 'ideas', ideaId, 'promoters', user.uid)
      );

      if (promoted.exists()) {
        // Nothing to promote.
        return;
      }

      await runTransaction(firestore, async (transaction) => {
        transaction.update(doc(firestore, 'ideas', ideaId), {
          promoterCount: increment(1),
        });

        transaction.set(
          doc(firestore, 'ideas', ideaId, 'promoters', user.uid),
          { createdAt: serverTimestamp() }
        );

        await updateUser(name, transaction);
      });

      client.invalidateQueries('get-user-ideas');
      client.invalidateQueries('get-top-ideas');
      client.invalidateQueries(`get-idea-${ideaId}`);
      client.invalidateQueries('get-all-ideas');
    },
    [client, updateUser]
  );
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
