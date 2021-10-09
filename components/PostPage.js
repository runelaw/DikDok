import {
  Box,
  Chip,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import Navigation from 'components/Navigation';
import PromoteForm from 'components/PromoteForm';
import TimeAgo from 'javascript-time-ago';
import Head from 'next/head';
import { MdThumbUp } from 'react-icons/md';
import { useUserById } from 'store/auth';
import { pledgeTags } from 'store/pledge';

const timeAgo = new TimeAgo('en-US');

export default function PostPage({ post, type }) {
  const { data: user } = useUserById(post.uid);

  return (
    <>
      <Head>
        <title>100bhagya - {post.title}</title>
      </Head>

      <Navigation />

      <Container sx={{ pt: 8, pb: 8 }}>
        <Paper>
          <Grid container>
            <Grid item xs={12} md={6} sx={{ px: 4, py: 3 }}>
              <Typography
                variant="caption"
                component="p"
                color="textSecondary"
                sx={{ mt: 1 }}
              >
                Posted {timeAgo.format(post.createdAt.toDate())}
              </Typography>
              <Typography variant="h4">{post.title}</Typography>
              <Typography
                variant="h6"
                component="p"
                sx={{ mt: 1, fontWeight: 400 }}
              >
                {post.description}
              </Typography>

              {post.link && (
                <Typography
                  variant="body1"
                  component="a"
                  href={post.link}
                  target="_blank"
                  rel="noreferrer nofollow"
                  color="primary"
                  sx={{ mt: 1, fontWeight: 400 }}
                >
                  {post.link}
                </Typography>
              )}

              <Stack direction="row" sx={{ mt: 1 }}>
                {/* TODO: Use common tags between ideas and pledges. */}
                {post.tags.map((it, index) => (
                  <Chip
                    key={it}
                    label={pledgeTags[it]}
                    size="small"
                    sx={{ mr: index !== post.tags.length - 1 ? 1 : 0 }}
                  />
                ))}
              </Stack>

              {user?.name && (
                <>
                  <Typography component="p" variant="caption" sx={{ mt: 2 }}>
                    Posted by
                  </Typography>
                  <Typography variant="body2">{user?.name}</Typography>
                </>
              )}
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              sx={{
                borderTop: {
                  xs: '1px solid #DADADA',
                  md: '0',
                },
                borderLeft: {
                  md: '1px solid #DADADA',
                },
                px: 4,
                pt: 3,
                pb: 5,
              }}
            >
              <Typography
                variant="h6"
                component="div"
                color="primary"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <MdThumbUp size={20} />{' '}
                <Box sx={{ ml: 1 }}>
                  {post.promoterCount ?? 0} promoters until now
                </Box>
              </Typography>

              <PromoteForm type={type} postId={post.id} title={post.title} />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </>
  );
}
