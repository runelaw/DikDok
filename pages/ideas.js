import { Button, Container, Stack, Typography } from '@mui/material';
import Navigation from 'components/Navigation';
import PostCard from 'components/PostCard';
import Head from 'next/head';
import Link from 'next/link';
import { useCallback } from 'react';
import { loggedIn, useAuth } from 'store/auth';
import { useAllIdeas } from 'store/idea';
import EmptyIdeas from 'components/EmptyIdeas';

export default function Ideas() {
  const isLoggedIn = useAuth(
    useCallback((state) => state.isLoggedIn === loggedIn.true, [])
  );
  const { data: ideas, isLoading } = useAllIdeas();

  return (
    <>
      <Navigation />

      <Head>
        <title>100bhagya - Ideas</title>
      </Head>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" textAlign="center">
          Ideas
        </Typography>
        <Typography textAlign="center" color="textSecondary">
          Ideas shared by people to forward the goals of India at 100.
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          {isLoggedIn && (
            <Link href="/my-ideas" passHref>
              <Button component="a" variant="contained">
                My Ideas
              </Button>
            </Link>
          )}

          <Link href="/share-an-idea" passHref>
            <Button variant="contained">Share a new idea</Button>
          </Link>
        </Stack>

        <Stack spacing={2} sx={{ mt: 4 }}>
          {(ideas ?? []).map((it) => (
            <PostCard key={it.id} post={it} isWide />
          ))}

          {!isLoading && (ideas ?? []).length === 0 && <EmptyIdeas />}
        </Stack>
      </Container>
    </>
  );
}
