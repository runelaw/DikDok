import { LoadingButton } from '@mui/lab';
import { Box } from '@mui/system';
import { MdThumbUp } from 'react-icons/md';
import { useAsyncFn } from 'react-use';
import { usePromoteIdea, useUnpromoteIdea } from 'store/idea';
import { usePromotePledge, useUnpromotePledge } from 'store/pledge';
import { postKind } from 'utils/constant';

export default function PromoteButton({ type, postId, count, isPromoted }) {
  const promoteIdea = usePromoteIdea();
  const unpromoteIdea = useUnpromoteIdea();
  const promotePledge = usePromotePledge();
  const unpromotePledge = useUnpromotePledge();

  const [{ loading }, onClick] = useAsyncFn(async () => {
    if (type === postKind.initiative) {
      if (isPromoted) {
        await unpromotePledge(postId);
        return;
      }

      await promotePledge(postId);
      return;
    }

    if (isPromoted) {
      await unpromoteIdea(postId);
      return;
    }

    await promoteIdea(postId);
  }, [
    isPromoted,
    postId,
    promoteIdea,
    promotePledge,
    type,
    unpromoteIdea,
    unpromotePledge,
  ]);

  return (
    <LoadingButton
      sx={{
        flexDirection: 'column',
        height: 100,
        width: 120,
        p: 0,
      }}
      color={isPromoted ? 'primary' : 'inherit'}
      onClick={onClick}
      loading={loading}
    >
      <MdThumbUp size={20} />
      <Box component="span" sx={{ mt: 0.5 }}>
        {count} Promoters
      </Box>
    </LoadingButton>
  );
}
