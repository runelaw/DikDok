import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useCallback } from 'react';
import { useAuth } from './auth';

/**
 * Hook to create a pledge.
 */
export function useCreatePledge() {
  return useCallback(async (state) => {
    const user = useAuth.getState().user;
    if (!user) {
      return;
    }

    await addDoc(collection('pledges'), {
      ...state,
      uid: user.uid,
      // The pledge will need to be approved by the admin.
      isApproved: false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }, []);
}
