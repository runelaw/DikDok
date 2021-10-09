import { doc, getDoc } from '@firebase/firestore';
import { useCallback } from 'react';
import { useQuery } from 'react-query';
import { postKind } from 'utils/constant';
import { useAuth } from './auth';
import { firestore } from './firebase';

export function useCheckIfPromoted(postId, type) {
  const uid = useAuth(useCallback((state) => state.user?.uid, []));
  const colName = type === postKind.initiative ? 'pledges' : 'ideas';

  return useQuery(`get-if-promoted-${colName}-${postId}`, () =>
    getDoc(doc(firestore, colName, postId, 'promoters', uid)).then((result) =>
      result.exists()
    )
  );
}
