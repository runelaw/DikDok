import { Container, Typography } from '@mui/material';
import Navigation from 'components/Navigation';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';
import { useCallback, useEffect } from 'react';
import { loggedIn, useAuth } from 'store/auth';

export default function MyInitiatives() {
  const isLoggedIn = useAuth(useCallback((state) => state.isLoggedIn, []));

  const { push } = useRouter();
  useEffect(() => {
    if (isLoggedIn === loggedIn.false) {
      push('/');
    }
  }, [isLoggedIn, push]);

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
      </Container>
    </>
  );
}
