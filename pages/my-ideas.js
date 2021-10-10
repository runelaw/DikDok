import { Container, Stack, Typography } from '@mui/material';
import Navigation from 'components/Navigation';
import PostCard from 'components/PostCard';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { loggedIn, useAuth } from 'store/auth';
import { useMyIdeas } from 'store/idea';

export default function MyIdeas() {
  const isLoggedIn = useAuth(useCallback((state) => state.isLoggedIn, []));

  const { push } = useRouter();
  useEffect(() => {
    if (isLoggedIn === loggedIn.false) {
      push('/');
    }
  }, [isLoggedIn, push]);

  const { data: ideas } = useMyIdeas();

  const seo = (
    <Head>
      <title>100bhagya - My Ideas</title>
    </Head>
  );

  if (isLoggedIn !== loggedIn.true) {
    return seo;
  }

  return (
    <>
      {seo}

      <Navigation />

      <Container sx={{ pt: 8, pb: 8 }}>
        <Typography variant="h5" textAlign="center">
          My Ideas
        </Typography>
        <Typography color="textSecondary" textAlign="center">
          The ideas that I have shared with the world.
        </Typography>

        <Stack spacing={2} sx={{ mt: 4 }}>
          {(ideas || []).map((it) => (
            <PostCard key={it.id} post={it} isWide />
          ))}
        </Stack>
      </Container>
    </>
  );
}
