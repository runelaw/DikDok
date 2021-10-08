import { Button, Container, Stack, Typography } from '@mui/material';
import Navigation from 'components/Navigation';
import PostCard from 'components/PostCard';
import Head from 'next/head';
import Link from 'next/link';
import { useAllPledges } from 'store/pledge';

export default function Initiatives() {
  const { data: pledges } = useAllPledges();

  return (
    <>
      <Navigation />

      <Head>
        <title>100bhagya - Initiatives</title>
      </Head>

      <Container sx={{ mt: 4 }}>
        <Typography variant="h5" textAlign="center">
          Initiatives
        </Typography>
        <Typography textAlign="center" color="textSecondary">
          Latest initiatives that everybody has pledged to.
        </Typography>

        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 2 }}
        >
          <Link href="/my-initiatives" passHref>
            <Button component="a" variant="contained">
              My Initiatives
            </Button>
          </Link>

          <Link href="/make-a-pledge" passHref>
            <Button variant="contained">Make a Pledge</Button>
          </Link>
        </Stack>

        <Stack spacing={2} sx={{ mt: 4 }}>
          {(pledges ?? []).map((it) => (
            <PostCard
              key={it.id}
              type="initiative"
              title={it.title}
              description={it.description}
              link={it.link}
              tags={it.tags}
              postId={it.id}
              createdAt={it.createdAt}
            />
          ))}
        </Stack>
      </Container>
    </>
  );
}
