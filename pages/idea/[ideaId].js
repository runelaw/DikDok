import PostPage from 'components/PostPage';
import { useRouter } from 'next/router';
import { useIdeaById } from 'store/idea';

export default function Initiative() {
  const { query } = useRouter();
  const ideaId = query.ideaId;
  const { data, error } = useIdeaById(ideaId);

  if (error || !data) {
    return null;
  }

  return <PostPage post={data} />;
}
