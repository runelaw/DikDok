import { Container, Stack, Typography } from '@mui/material';
import Navigation from 'components/Navigation';
import PostCard from 'components/PostCard';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useCallback, useEffect } from 'react';
import { loggedIn, useAuth } from 'store/auth';
import { useMyPledges } from 'store/pledge';

export default function MyInitiatives() {
  const isLoggedIn = useAuth(useCallback((state) => state.isLoggedIn, []));

  const { push } = useRouter();
  useEffect(() => {
    if (isLoggedIn === loggedIn.false) {
      push('/');
    }
  }, [isLoggedIn, push]);

  const { data: pledges } = useMyPledges();

  const seo = (
    <Head>
      <title>100bhagya - My Initiatives</title>
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
          My Initiatives
        </Typography>
        <Typography color="textSecondary" textAlign="center">
          The initiatives that I have pledged to.
        </Typography>

        <Stack spacing={2} sx={{ mt: 4 }}>
          {(pledges || []).map((it) => (
            <PostCard
              key={it.id}
              postId={it.id}
              title={it.title}
              description={it.description}
              tags={it.tags}
              link={it.link}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
}
