import {
  Card,
  CardContent,
  Chip,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import TimeAgo from 'javascript-time-ago';
import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { MdOpenInNew } from 'react-icons/md';
import { useAuth } from 'store/auth';
import { pledgeTags } from 'store/pledge';
import PromoteButton from './PromoteButton';
import ShareCardPopover from './ShareCardPopover';

const timeAgo = new TimeAgo('en-US');

export default function PostCard({ type, post }) {
  const { push } = useRouter();
  const onClick = useCallback(
    () =>
      push(
        type === 'initiative' ? `/initiative/${post.id}` : `/idea/${post.id}`
      ),
    [post.id, push, type]
  );
  const userId = useAuth(useCallback((state) => state.user?.uid, []));

  return (
    <Card sx={{ display: 'flex', flex: 1, flexShrink: 0 }}>
      <Box
        sx={{
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 150,
          borderRadius: 0,
          borderRight: '1px solid',
          borderColor: '#DADADA',
          flexShrink: 0,
          display: {
            xs: 'none',
            md: 'flex',
          },
        }}
      >
        <Stack sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <PromoteButton
            count={post.promoters?.length ?? 0}
            isPromoted={
              userId ? (post.promoters ?? []).includes(userId) : false
            }
          />
        </Stack>

        <Stack
          direction="row"
          spacing={1}
          sx={{ alignItems: 'flex-start', px: 2, py: 0 }}
        >
          <ShareCardPopover pledgeId={post.id} title={post.title} />
          {post.link && (
            <IconButton
              component="a"
              size="small"
              href={post.link}
              target="_blank"
              rel="noreferrer nofollow"
            >
              <MdOpenInNew />
            </IconButton>
          )}
        </Stack>
      </Box>

      <CardContent
        sx={{ pt: 1, pb: '8px !important', cursor: 'pointer', flex: 1 }}
        onClick={onClick}
      >
        <Typography
          variant="h6"
          sx={{ fontSize: { xs: '1rem', md: '1.1rem' } }}
        >
          {post.title}
        </Typography>

        <Typography sx={{ display: { xs: 'none', md: 'block' } }}>
          {post.description}
        </Typography>

        <Stack direction="row" sx={{ mt: 1 }}>
          {post.tags.map((it, index) => (
            <Chip
              key={it}
              label={pledgeTags[it]}
              size="small"
              sx={{ mr: index !== post.tags.length - 1 ? 1 : 0 }}
            />
          ))}
        </Stack>

        <Typography
          variant="caption"
          component="p"
          color="textSecondary"
          sx={{ mt: 2 }}
        >
          Posted {timeAgo.format(post.createdAt.toDate())}
        </Typography>
      </CardContent>
    </Card>
  );
}
