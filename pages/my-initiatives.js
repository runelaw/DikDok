import { Container, Typography } from '@mui/material';
import HomeMainSection from 'components/HomeMainSection';
import Navigation from 'components/Navigation';
import Head from 'next/head';

export default function MyInitiatives() {
  return (
    <>
      <Navigation />

      <Head>
        <title>100bhagya - My Initiatives</title>
      </Head>

      <Container sx={{ pt: 8, pb: 8 }}>
        <Typography variant="h5" textAlign="center">
          My Initiatives
        </Typography>
      </Container>
    </>
  );
}
