import PostPage from 'components/PostPage';
import { useRouter } from 'next/router';
import { useIdeaById } from 'store/idea';
import { postKind } from 'utils/constant';

export default function Initiative() {
  const { query } = useRouter();
  const ideaId = query.ideaId;
  const { data, error } = useIdeaById(ideaId);

  if (error || !data) {
    return null;
  }

  return <PostPage type={postKind.idea} post={data} />;
}
