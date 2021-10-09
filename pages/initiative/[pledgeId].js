import PostPage from 'components/PostPage';
import { useRouter } from 'next/router';
import { usePledgeById } from 'store/pledge';
import { postKind } from 'utils/constant';

export default function Initiative() {
  const { query } = useRouter();
  const pledgeId = query.pledgeId;
  const { data, error } = usePledgeById(pledgeId);

  if (error || !data) {
    return null;
  }

  return <PostPage type={postKind.initiative} post={data} />;
}
